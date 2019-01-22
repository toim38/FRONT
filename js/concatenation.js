//alert("coucou");
/*----------------------
CONCATENATION
---------------------------*/
//concatener signifie mettre bout à bout 2 chaines de caractere afin d'en former une troisieme,
//la nouivelle concatenée c'est additioner à la chaine de caractere,en JS on concatene grace à l'operateur <<+>>.*/
var annee=2007;
var futur=3;
var calcul= annee+futur;
console.log(calcul);
document.write(calcul+"<br>");
var mois="7";
var calcul2=annee+""+mois;
console.log(calcul2);
document.write(calcul2+"<br>");

var DebutPhrase="Aujourd'hui,";
var NbStagiaires=9;
var SuitePhrase ="stagiaires";
var FinPhrase ="sont présents ";

//afficher la phrase en seul morceau avec la concatenation :
//document.write( DebutPhrase + " " + NbStagiaires + " " + SuitePhrase + " " + FinPhrase);
var phrase=DebutPhrase+""+NbStagiaires+""+SuitePhrase+""+FinPhrase;
console.log(phrase);
document.write(phrase);