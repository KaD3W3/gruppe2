# Teil 1: Beschreibung der Use-Case Domäne,informelle Domänenmodellierung
## 1) Zielstellung und Beschreibung der modellierten Domäne
Ausgangspunkt des studentischen Projektes im Rahmen des Moduls “Enterprise Knowledge
Engineering” war das Handbuch zur Elvis-Software sowie zwei zu bearbeitende Use Cases.
Der fachliche Hintergrund in Bezug auf die Software Elvis wurde dabei von einer Mitarbeiterin der
Cornelsen Verlags GmbH, im weiteren Sinne dem Auftraggeber dieses Projektes, an die
Studierenden vermittelt.
######
Was aber ist eigentlich dieses Elvis? Elvis (siehe http://www.elvisdam-plus.de/) ist eine Software zur
Verwaltung und Weiterverarbeitung von digitalen Assets und wird vom Cornelsen Verlag als
zentrales Digital Asset Management-System (DAM-System) für interne und externe MitarbeiterInnen
bzw. Redakteure/Innen eingesetzt.
Assets im Sinne dieses Kontextes sind dabei alle für die Produktion von Titeln bzw. Büchern
relevanten Dateien, wie z. B. Bild-, Audio-, Video-Dateien bis hin zu Manuskripten.
Im Elvis-System sind damit ein Großteil der zentralen Unternehmenswerte des Cornelsen Verlages
enthalten.
######
Übergeordnetes Ziel des Projektes war es, ein Wissensmodell (Enterprise Knowledge Modell) zu
entwerfen, welches im Anschluss ggf. zur automatischen Weiterverarbeitung mittels eines ITSystems (z. B. Webseiten-Navigation, Suchmaske, Chatbot) genutzt werden kann.
######
In Use Case 1 sollte daher von den Studierenden eine Taxonomie, als Wissensbasis mit den
wichtigsten Begriffen, Begriffs-Varianten (als Synonym) sowie Ober- und Unterbegriffen zum ElvisSystem auf der Grundlage des Handbuches entwickelt werden.
Diese Taxonomie sollte dann ins RDF-Format (Resource Description Framework) überführt und
mittels des SKOS-Modells formalisiert werden. Letztlich sollte dadurch erreicht werden, dass es
mittels einer IT-Anwendung möglich ist, in der Begriffshierarchie über die Ober- und Unterbegriffe
zu navigieren sowie über eine Suchmasken-Anwendung über die verschiedenen Synonyme die
zentralen, relevanten Fundstellen zum gesuchten Thema bzw. Problem im Elvis-Handbuch zu finden.
######

In Use Case 2 sollte dann auf Basis häufig auftretender Supportanfragen durch die Nutzer der ElvisSoftware, die Taxonomie aus Use Case 1 überprüft und sofern erforderlich, das Wissensmodell um
weitere Beziehungen erweitert werden.
Letztlich sollte dadurch ein Ontologie-Modell entworfen werden, welches es dem Nutzer ermöglicht,
seine Supportanfragen in ein IT-System (z. B. Chatbot) einzugeben, um an die relevante Stelle des
(digitalen) Elvis-Handbuches weitergeleitet zu werden.
Eine Auswahl der relevanten Supportanfragen wurde dabei von der Mitarbeiterin des Cornelsen
Verlages im Kick-Off-Gespräch, wie die Software und das Handbuch selbst, kurz vorgestellt und im
Anschluss das Handbuch, den Studierenden zur Verfügung gestellt.

## 2) Vorgehen während der Modellierung
Zu Beginn des Studienmoduls wurden alle Teilnehmer in zwei Arbeitsgruppen mit jeweils vier bis
fünf Mitgliedern aufgeteilt.
Für das Projekt wurde das bereitgestellte Handbuch des Elvis-Systems unter den beiden Gruppen in
zwei Teile aufgeteilt, so dass es pro Person jeweils ca. 20 Seiten zu untersuchen galt.
Vorab wurde von jedem Studierenden das gesamte Handbuch überflogen und dann der jeweils
eigene Teil des Handbuches intensiv durchgelesen und relevante Begriffe markiert.
######
Die markierten Begriffe wurden anschließend in eine dafür vorgesehene Excel-Tabelle je
Gruppenmitglied eingetragen.
Als Grundlage diente den einzelnen Studierenden dabei eine zuvor selbst erstellte, einheitliche
Vorlage im Excel-Format.
In einem nächsten Schritt wurden alle Einzeltabellen der Gruppenmitglieder zu einer gemeinsamen
Gruppen-Tabelle zusammengeführt und als Mindmap veranschaulicht, um eine gute
Diskussionsgrundlage zur Abstimmung innerhalb der Gruppe zu erhalten.
Nach zahlreichen Online-Treffen zur Konsolidierung der Gruppentabelle, was viel Zeit für
Diskussionen erfordert hatte, war der erste Entwurf der Gruppe fertig.
######
Auf Basis des ersten Taxonomie-Entwurfs folgte in einem Online-Meeting mit zwei Vertreterinnen
des Auftraggebers ein Feedback-Gespräch, zu den bisherigen Ergebnissen der eigenen Gruppe, als
auch zu den Ergebnissen der zweiten Projektgruppe.
Nach dem Feedback der Cornelsen-Expertinnen hatte sich der Blickwinkel auf die
Modellierungsanforderungen und insbesondere auf den Umgang mit Synonymen verändert.
Mit Hilfe dieses neuen Wissens wurde daraufhin die Tabelle der Gruppe erneut überarbeitet, in dem
Versuch nur noch „echte“ Synonyme als Synonyme zu modellieren.
Dies hat dazu geführt, dass die Taxonomie mit weniger Synonymen insgesamt „breiter“ geworden
ist, da nicht so viele alternative Bezeichnungen vorhanden waren.
######
Im Anschluss wurden die Tabellen der beiden Projektgruppen zu einer “großen” Tabelle mit allen
bisher modellierten Konzepten der beiden Gruppen zusammengeführt.
Diese gesamtheitliche Tabelle wurde dann schrittweise manuell nochmals überarbeitet, wodurch
die Anzahl der Konzepte reduziert werden konnte.
Positiv dabei hervorzuheben ist, dass die erste Gruppe sich bereit erklärte, viele eigene Konzepte zu
löschen bzw. in den Bestand der zweiten Gruppe zu integrieren und teilweise nur die Synonyme in
die Gesamttabelle zu übertragen, so dass viele Dopplungen schnell eliminiert werden konnten.
Anschließend wurde die gesamte Tabelle je Gruppe mit einem entsprechendem Status versehen, ob
zu dem jeweiligen Konzept Einverständnis oder Rücksprachebedarf mit der anderen Gruppe
bestand.
In der gemeinsamen, online durchgeführten, Abschlussbesprechung wurden dann die
erklärungsbedürftigen Konzepte nochmals gemeinsam besprochen.
######
Bevor abschließend die Nummerierung der gesamten Tabelle implementiert und die Tabelle zur
Einholung von erneutem Feedback an die Mitarbeiterinnen vom Cornelsen Verlag geschickt wurde.
Die untenstehende Darstellung gibt eine Zusammenfassung der oben beschriebenen
Vorgehensweise wieder.
![Vorgehensweise](https://user-images.githubusercontent.com/50373209/81845684-35757080-9551-11ea-8d42-feeeba81f15c.png)

## 3) Schwierigkeiten
#### a) Modellierungsoptionen
Da die Studierenden von Anfang an keinen Zugriff auf das System hatten, konnte die Wichtigkeit der
einzelnen Begriffe aus dem Handbuch nicht genau eingeschätzt werden.
Deshalb haben die Gruppenmitglieder zuerst viele Begriffe als Konzept nach ihrem Verständnis
modelliert.
Weiterhin wurden am Anfang viele Begriffe mehrmals aufgeschrieben und einige Aspekte konnten
nicht klar differenziert werden, denn das Handbuch wurde jeweils für zwei Gruppen in diverse Teile
aufgeteilt.
Dies wird weiterhin Schwierigkeiten bei der Modellierung der Ontologie verursachen.
######
Vor dem ersten Feedback-Meeting mit den Cornelsen-Expertinnen war die Bedeutung von
“Synonymen” in Zusammenhang mit Elvis nicht ganz klar, d.h. einige Begriffe konnten auf
semantische Sicht nicht als Synonym berücksichtigt werden.
Darüber hinaus war es für die Studierenden auch schwierig, die relevanten Konzepte zur
Strukturierung der Taxonomie zu identifizieren und zu klassifizieren.
Im Rahmen des Feedback-Meetings wurden dann die Anforderungen bzw. das Ziel in Bezug auf den
Umgang mit Synonymen deutlicher, so dass dies sehr hilfreich für das Verständnis und die weitere
Modellierung war.
#### b) organisatorische Herausforderungen
Da Gruppenarbeit ein ständiges Auf und Ab ist, stießen die Studierenden der Gruppe 2 sowohl bei
der Kommunikation als auch bei der Bearbeitung des Projekts selbst auf einige Herausforderungen,
die es zu bewältigen galt.
Die erste große Herausforderungen bestand darin, das Projekt ausschließlich online durchführen zu
müssen.
Dadurch konnte nicht einfach in einem gemeinsamen Raum diskutiert und für alle Teilnehmer
gleichermaßen sichtbar der Diskussionsinhalt an einer Wand aufgezeigt werden.
Anstelle dessen musste die Präsentation und Diskussion online erfolgen, was zu einem höheren
Abstimmungsaufwand führte.
Zudem gab es von Zeit zu Zeit technische Probleme und einige Teilnehmer hatten Schwierigkeiten
bei der Nutzung der Online-Tools wie Google-Drive oder Onedrive, so dass dies die
Projektzusammenarbeit weiter erschwerte.
Darüber hinaus hatten die Gruppenmitglieder, zuvor in dieser Zusammensetzung noch nie
gemeinsam in einem Projekt zusammengearbeitet, so dass sich die einzelnen “Puzzleteile” erst zu
einem Team entwickeln mussten.
Weiterhin kam hinzu, dass die Projektmitglieder nicht alle Deutsch-Muttersprachler waren und das
Projektteam somit international besetzt war.
######

Als weitere Herausforderung ergab sich, dass vorab nicht vorhandene Wissen über die konkreten
Anforderungen im Hinblick auf die Wissensmodellierung seitens des Cornelsen Verlages.
Zwar war den Studierenden der grobe Rahmen des Projektes bewusst, jedoch hatten die einzelnen
Teilnehmer zu Beginn des Projektes unterschiedliche Sichtweisen auf das Modellierungsvorhaben.
Diese Anforderungen wurden dann mit der Vorstellung und Einführung der Cornelsen-Expertin in
das Elvis-System weiter geschärft, jedoch wie sich im Rahmen des Feedback-Meetings zeigte, ist eine
regelmäßige Iteration bzw. Rückkopplung mit dem Auftraggeber unerlässlich und sehr wichtig für
den Projektfortschritt.
Wie in jedem anderen interdisziplinären Projekt, führte dies teilweise zu einem erhöhten
Kommunikations- und Diskussionsbedarf, der jedoch insgesamt gut von der Projektgruppe bewältigt
werden konnte.
######

Im Hinblick auf die gruppenübergreifende Zusammenarbeit ergaben sich schließlich weitere
Herausforderungen bezüglich der Kommunikation.
Beispielsweise erfolgten Reaktionen auf Terminvorschläge, um das Projekt gemeinsam vorantreiben
zu können, nur sehr spät.
Zudem hatten beide Gruppen zum Handbuchteil der jeweils anderen Gruppe nur ein sehr geringes
Wissen aufgebaut, was die Abstimmung zu einem gemeinsamen Modellierungsansatz weiter
erschwerte und nur durch sehr zeitintensive Rücksprachen ausgeglichen werden konnte.
######

Als weitere Herausforderung ergaben sich die unterschiedlichen Strukturen der beiden Gruppen, die
anfangs nicht übereinstimmten sowie auch eine Vielzahl von Dopplungen zwischen den beiden
Gruppentabellen.
Dadurch funktionierte eine einfache Integration der beiden Gruppentabellen ineinander nur
teilweise, so dass die Gesamttabelle ebenfalls durch viele Online-Abstimmungen, bis hin zum
aktuellen Stand, bereinigt werden musste.
## 4) Die (iterativ erstellten) Versionen des Modells
Durch den iterativ gestalteten Prozess gelang es den Studierenden aus beiden Gruppen das jetzige
Taxonomie-Modell (siehe Anhang 3) vorzulegen.
Zu Anfang sah das Modell noch ganz anders aus und hatte noch keinen Input von der anderen
Gruppe oder von den Cornelsen-Expertinnen.
######

Um sich in die Systemstrukturen von Elvis einzuarbeiten, wurde auf Basis der ersten Gruppenversion
eine Grafik (Mindmap) erstellt mit den Vermutungen und Vorstellungen zur Hierarchie.
In dieser ersten Version (siehe Anhang 1) hatte die Gruppe 2 sieben Oberbegriffe, mit diversen
Unterbegriffen und Gruppierungen, modelliert.
Nach dem Feedback vom Cornelsen Verlag wurde versucht, das Problem der Synonyme zu lösen
(siehe Kapitel 3) und dadurch wurde die zweite Gruppenversion insgesamt breiter, da nur echte
Synonyme verwendet werden sollten.
Zuvor gelöschte Konzepte oder als Synonym eingesetzte Konzepte wurden wieder eingesetzt (siehe
Anhang 2).
######

Im letzten Schritt wurde versucht die Strukturen der beiden Gruppen zu einer verschmelzen zu
lassen.
Was, wie schon erwähnt, nicht einfach war. In dem jetzigen Modell sind 320 einzelne Konzepte und
12 Oberbegriffe enthalten.
Das Ganze wird unter dem Elvis-Thesaurus geführt (siehe Anhang 3)
## 5) Maßnahmen zur Qualitätssicherung
Um die Qualität des Projektes bzw. der Taxonomie zu sichern, wurden in einem ersten Schritt die
Tabellen zwischen den Gruppen ausgetauscht und die Modelle der jeweils anderen Gruppe gesichtet
und kommentiert.
Im Anschluss wurden dann die Tabellen von den Gruppen nochmals überarbeitet und schließlich zu
einer Gesamttabelle zusammengeführt.
Im nächsten Schritt des Qualitätssicherungsprozesses wurde jede einzelne Zeile (anfangs über 400
Zeilen) der zusammengeführten Excel-Tabelle mit der Logik der Elvis-Struktur geprüft und von den
beiden Projektgruppen abgestimmt.
Durch die Verwendung der “...ist ein...”-Logik konnten fälschlicherweise angenommene Beziehungen
erkannt und verbessert werden.
Durch die Anmerkung der jeweiligen Studierendengruppe konnten zudem Redundanzen minimiert
werden und Synonyme wurden an deren richtige Stelle platziert.
Alle Konzepte, die nicht mit dem aktuellen Release von Elvis möglich waren, wurden nach dem
Feedback von den Cornelsen-Expertinnen, ebenfalls gelöscht.
######

Zudem wurde ein Großteil der Qualitätssicherung durch das wiederholte, iterative Diskutieren und
Besprechen der einzelnen Konzepte, sowohl während der Arbeit an der gruppeneigenen Tabelle als
auch nach der Zusammenführung der beiden Gruppentabellen, erreicht.
## 6) Kritische Würdigung der Ergebnisse
Zusammenfassend kann festgehalten werden, dass das Projektziel, ein Taxonomie-Modell zu
entwerfen, welches durch den Auftraggeber für die Automatisierung mittels eines IT-Systems
weiterverwendet werden könnte, durch die Projektgruppe erreicht wurde.
Positiv ist anzumerken, dass trotz der Umstände, die zuvor beschriebenen Herausforderungen
innerhalb der Gruppe 2, aber auch gruppenübergreifend, durch viel Einsatzwillen und regelmäßige
Online-Meetings der Studierenden größtenteils gut bewältigt werden konnten.
Zudem hat das Projekt dazu beigetragen, die Kommunikationskompetenzen der Studierenden weiter
zu entwickeln und in Bezug auf den Einsatz der Online-Medien einen wichtigen Schulungsbeitrag für
alle Beteiligten geleistet.
######

Andererseits hätte der Verlauf des Projekts verbessert werden können, wenn die Studierenden
Zugang zum Elvis-System oder zu Videos in Bezug auf die Nutzung gehabt hätten, um sich das
System bildlich vorzustellen.
Darüber hinaus bleibt zu vermuten, dass die Kommunikationsherausforderungen einfacher zu lösen
gewesen wären, wenn das Projekt nicht ausschließlich online durchgeführt worden wäre.
Alle diese Punkte haben das Projekt insgesamt vielseitiger, aber auch die Abstimmung aufwendiger
und teilweise schwieriger gemacht.
######

Weiterhin ist für alle Beteiligten sehr deutlich geworden, wie wichtig eine regelmäßige
Rückkopplung mit dem Auftraggeber in einem derartigen Projekt ist.
Insbesondere das Feedback der Cornelsen-Expertinnen hat für alle Studierenden einen großen
Mehrwert hervorgebracht, da es dazu beigetragen hat, die Zielrichtung des Verlages besser zu
verstehen und somit das Modell dementsprechend zu entwerfen.
Zudem hat das Projekt dazu beigetragen Erfahrungswerte in Bezug auf Modellierungsprojekte und in
Bezug auf den Auftraggeber zu gewinnen, so dass in einem nächsten gemeinsamen Projekt, davon
profitiert werden könnte.
Anders gesagt, mit dem heutigen Wissen zum Projekt und zum Auftraggeber, würde die gleiche
Projektgruppe sicherlich einen anderen ersten Modellierungsentwurf erstellen und schneller zum
Ergebnis kommen.
######

Insgesamt hat dieses Projekt einen bisher, größtenteils unbekannten, Lernprozess offenbart, der von
allen Studierenden ein Umdenken und viel Flexibilität in Bezug auf altbekannte Gewohnheiten
erfordert hat.
Dennoch kann abschließend zusammengefasst werden, dass auch reine Online-Projekte mit
entsprechendem Einsatz und Aufwand zu einem guten Ergebnis führen können.
## Anhang
##### 1) Grafik erstes Modell
##### 2) Tabelle vor Qualitätsüberprüfung
##### 3) Zusammengeführte Tabelle
