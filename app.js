// Endpoint für http-Request als Konstante deklarieren
//const endpoint="http://localhost:3030/cornelsenTaxonomie-dataset/sparql?query=";
const endpoint="https://aqueous-gorge-69069.herokuapp.com/ds/sparql?query=";

//let sparqlQuery ="SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object}"

//Instanz Nr. 1
let vOne = new Vue({        //Keyword "let" einfach nur neuere Schreibweise um Varaible zu definieren
    el: '#app1',             //Ankerpunt zum HTML-Knoten in index.html
    
    data() {
        return {
            info: null,
            variables : [],
            querybindings : [],
            tripleAnzahl: null,
            vError: false,

            //weitere Variablen/Daten, die nicht über den http-Requst ermittelt werden
            sparqlQuery: "SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object}",
            allesAnzeigen: true,
        }
    },

    methods: {
        processResponse(response){
        //processResponse: function(response){
            this.info = "Mindestens ein Ergebnis wurde gefunden."
            this.variables = response.data.head.vars
            this.querybindings = response.data.results.bindings
            this.tripleAnzahl = this.querybindings.length
            this.vError = false
            
            //console.log(response.data.head.vars)
            //console.log(response.data.results.bindings[0, 1, 2])
            //console.log(this.querybindings.length)
            //console.log(this.vError)
            //console.log(this.variables)
            //console.log(this.querybindings[0].object.value)
            //console.log(this.querybindings[0].value)
            //console.log(this.sparqlQuery)
            console.log(this.processResponse)
        },

        noResponse(){
        //noResponse: function(){
            
            this.info = "Query did not work. The Sparql endpoint may not be available or the query may be malformed. / Sparql-Abfrage hat nicht funktioniert. "
            //console.log(this.querybindings[0].object.value)            
            this.vError = true

            if (this.querybindings.length != 0){
                this.info = "Mindestens ein Ergebnis wurde gefunden."
                this.vError = false
            }
            
            //console.log(this.variables)
            console.log(this.noResponse)
            //console.log(this.vError)
        },

        changeAnzeige(){
            this.allesAnzeigen = !this.allesAnzeigen
            console.log(this.changeAnzeige)
        },

        datenLaden(){
            //this.sparqlQuery ="SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object}"
            completeQuery = endpoint + encodeURIComponent(this.sparqlQuery) + "&output=json"
            
            //console.log(completeQuery)
            console.log(this.datenLaden)        
           
            
            axios.get(completeQuery)
                .then(response => (this.processResponse(response)))
                .catch( error => { this.noResponse()  })
                //.then(response => {console.log(response)})
                //.catch(error => {console.log(error)})

            //console.log(this.sparqlQuery)
        }
        
    },

    computed:{     //Beim Aufruf dann ohne "()", anders als bei Methods
    },
    
    mounted () {
    //mounted: function () {
        this.datenLaden()

        //console.log(this.sparqlQuery)
        //console.log(this.mounted)
    },
}); //Ende der 1. Instanz    


//Instanz Nr. 2
let vTwo = new Vue({
    el: '#app2',
    data: { 
        suchAnfrageBereich: false,
        suchBegriff: '',
        sucheInSelected: "?object",
        filteroptionen: true,
        //Was von einem Triple anzeigen?
        vSubject: true,
        vPredicate: true,
        vObject: true,

        // "ConceptScheme", "Concept", "prefLabel", "altLabel", "definition", "broader", "related", "notation"
        checkedFilter: ['ConceptScheme','Concept', 'prefLabel', 
                         'altLabel', 'broader', 'related', 
                         'definition', 'notation'],    //Ist der Wert aus Value der Checkboxen
       
     },
    
    methods: {
        showSuchAnfrageBereich(event){
            this.suchAnfrageBereich = !this.suchAnfrageBereich
            console.log(this.showSuchAnfrageBereich)
        },

        showFilteroptionen(event){
            this.filteroptionen = !this.filteroptionen
            console.log(this.showFilteroptionen)
        },    
       
        buildQueryString(){
            console.log(this.buildQueryString)
            /*
            SELECT ?subject ?predicate ?object 
            WHERE {  ?subject ?predicate ?object. 
            FILTER(?object = <http://www.w3.org/2004/02/skos/core#Concept> )
            } */
            /* Alternative (Vereinigung über UNION)
            REFIX skos: <http://www.w3.org/2004/02/skos/core#> 
            SELECT ?subject ?predicate ?object  
            WHERE { 
            {?subject skos:ConceptScheme ?object}  UNION  
            {?subject skos:Concept ?object}  UNION 
            {?subject skos:prefLabel ?object } 
            }             
            */

            let queryString = null;
            
            //Was solle angezeigt werden? "?subject ?predicate ?object"
            queryString = "PREFIX skos: <http://www.w3.org/2004/02/skos/core#> "
            queryString = queryString + "SELECT "
            
                //Was von einem Triple anzeigen?
                //console.log(this.vSubject);
                if(this.vSubject == true && this.vPredicate == true && this.vObject == true){
                    queryString = queryString + " ?subject ?predicate ?object "
                }
                else {                  
                    if(this.vSubject == true) {
                        queryString = queryString + " ?subject "
                    }
                    if(this.vPredicate == true) {
                        queryString = queryString + " ?predicate "
                    }
                    if(this.vObject == true) {
                        queryString = queryString + " ?object "
                    }     
                }

            //"SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object}"
            queryString = queryString + "WHERE { ?subject ?predicate ?object. "

                if (this.suchBegriff != '' && this.sucheInSelected == "?subject") {
                    queryString = queryString + "?subject skos:prefLabel ?objectClassSubject. "
                    //Teil 2 siehe Filter                   
                }

            //FILTER: Wenn alles ausgewählt ist, KEIN Filter setzen
            if(this.checkedFilter.length != 8){
            
                queryString = queryString + " FILTER ("
            
                //Welche Tripple sollen angezeigt werden?
                for (let i=0; i<=this.checkedFilter.length; i++){
                    //console.log(this.checkedFilter[i]);

                    if(i>0 && i != this.checkedFilter.length){
                        queryString = queryString + " || "
                    }
                    
                    // "ConceptScheme", "Concept", "prefLabel", "altLabel", "definition", "broader", "related", "notation"
                    if (this.checkedFilter[i]== "ConceptScheme"){
                        queryString = queryString + "?object =  skos:ConceptScheme "
                        //queryString = queryString + "?object = <http://www.w3.org/2004/02/skos/core#ConceptScheme>  "
                    }                
                    else if (this.checkedFilter[i]== "Concept"){
                        queryString = queryString + "?object = skos:Concept "
                    }
                    else if (this.checkedFilter[i]== "prefLabel"){
                        queryString = queryString + "?predicate = skos:prefLabel "
                    }
                    else if (this.checkedFilter[i]== "altLabel"){
                        queryString = queryString + "?predicate = skos:altLabel"
                    }
                    else if (this.checkedFilter[i]== "definition"){
                        queryString = queryString + "?predicate = skos:definition"
                    }
                    else if (this.checkedFilter[i]== "broader"){
                        queryString = queryString + "?predicate = skos:broader"
                    }
                    else if (this.checkedFilter[i]== "related"){
                        queryString = queryString + "?predicate = skos:related"
                    }
                    else if (this.checkedFilter[i]== "notation"){
                        queryString = queryString + "?predicate = skos:notation"
                    }
                } //For-Schleife Ende
            queryString = queryString + ")."
            }

            //Wenn Suchbegriff nicht leer, Suchbegriff einbeziehen
            //.FILTER regex(?object, "Bild", "i").
            //console.log(this.suchBegriff)
           
            if (this.suchBegriff != '' && this.sucheInSelected == "?subject") {
                queryString = queryString + " FILTER regex( ?objectClassSubject , '" + this.suchBegriff + "' , 'i')."
                            
                //Teil 2 (Teil 1 siehe oben)                   
            }

            if (this.suchBegriff != '' && this.sucheInSelected == "?object") {
                queryString = queryString + " FILTER regex( ?object, '" + this.suchBegriff + "' , 'i')."
            }
            
            //WHERE-Teil schließen
            queryString =  queryString + "}"
            //queryString =  queryString + " ORDER BY ?subject"
                       
            //console.log(this.queryString)
            return queryString;
        },


        datenFiltern() {   
            //console.log(this.querybindings)
            //console.log(this.querybindings[0].object.value)

            //sparqlQuery ="SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object}"
            //vOne.sparqlQuery ="SELECT ?subject ?predicate ?object WHERE {  ?subject ?predicate ?object. FILTER(?object = <http://www.w3.org/2004/02/skos/core#Concept> )}";
            vOne.sparqlQuery = this.buildQueryString();
            //console.log(vOne.sparqlQuery)
           
            console.log(this.datenFiltern)
            vOne.datenLaden()
            //console.log(checkedFilter)
                                    
        },
    },

}); //Ende der 2. Instanz