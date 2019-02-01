//-------------------------------------------------/syntaxe de base /-------------------------------------------------------
//commentaire sur une seule ligne

/*ici je fais un commentaire sur 
plusieurs lignes*/

//1:declarer une variable en JS
//var Prenom;
//--2:affecter une valeur à une variable.
// Prenom ="Touhami";
// var Prenom ="Touhami";//--3:1 instruction fini par ";"
//on peut ecrire plusieurs instructions en 1 ligne
//inst_1;
//inst_2;inst_3;
//--afficher une boite de dialogue (2 façons)
//alert("Genial,tu es sur mon site!!");
//window.alert("Genial,tu es sur mon site!!");
//--5:afficher ds la console(ici la valeur de ma variable
//Prenom)
//console.log("Touhami");
//--6afficher ds la page web
//document.write("A la pause il y a du café bizare")
//--7:demander à l'utilisateur une valeur (2 façons)
//--window.prompt("Question:quel jour sommes nous?","jour de semaine")
//prompt("question :quel jour sommes nous?")
//--->et pour manipuler cette valeur ,je n'oublie de la stocker.
//var jour=prompt("question:quel jour sommes nous?","jour de la semaine");
//console.log(mardi);
//---attention /!\le Js est sensible à la case
//mavariable=/=maVariable=/=ma_variable
//            camel case      snakecase
//--9:une variable ne peut pas commencer par un chiffre,elle ne contient que des caracteres alphanumerique,
//ne peut être un mot réservé(var,for,...des elements natifs du langage Js)
//--10:une variable peut-être declaree de façon explicite:
//var fruit;
//var fruit ="fraise";
//ou implicite:
//var fruit_2 ="coco";
//haribo ="tagada";

/*-------------------------------------------------------------------------------------------------------------------------------------------------

                                                      LES TYPES DE VARIABLES
-------------------------------------------------------------------------------------------------------------------------------------------------------*/


//------------1.Chaine de caractéres (string)
//l'objet global (string) est un constructeur de chaine de caractére.
//var vacances="2017";
//var destination="Australie";
//--2.un nb entier (integer ou int)
//var annee=2017;
//--3.un nb decimal (float)
//var nombre_a_virgule=5.32;
//--4.un booleen(boolean=vrai/faux=true/false)
//l'objet Boolean permet de representer une valeur Booleenne.
//var unBooleenne.
//var unBooleen=false;//--TRUE
//---------------------5.les constantes
//---la declarat° des constantes permet de creer une constante accessible uniquement en lecture.contrairement à une variable ,
//sa valeur ne peut plus être modifié par réaffectation ^plus bas ds le code.
//une constante ne pas être déclare à nouveau ds le même script
/*--par CONVENTION LES CONSTANTES SONT EN MAJUSCULES.
const PAYS=France;/:string
const AN='2020';//string
const BIRTH=2020;//nombre
*/
/*------------6.TYPEOF permet de connaitre le type de variable*/
/*console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);
console.log(typeof 2019);*/

//-----------------en JS les variables sont auto-typées
//on peut convertir une variable de type NUMBER en STRING
//et vis vers ça avec les fonct° native
//de JS
//----------la fonction parseInt()renvoie un entier à partir d'une chaine de caractere.(la fonction parseInt analyse une chaine de caractere fourni en argument
//et renvoit un entier ds une base de données)//
var unChiffre ="12";
 console.log(unChiffre);
 console.log(typeof"unChiffre");


 //------------------STRING=>NUMBER
 unChiffre= parseInt(unChiffre);
 console.log(unChiffre);
 console.log(typeof unChiffre);
 //je ré-affecte une valeur
 unChiffre="12.12";
 console.log(unChiffre );
 console.log(typeof unChiffre);
 //-------------    STRING=>FLOAT----------------


 /* la fonction parsefloat permet de transformer  1 chaine de caractere en un nb flottant apres avoir analysé celle-ci(parsing)
 un nb flottant obtenu obtenu à partir de l'analyse de la chaine de caractére ne permet d'obtenir un nb se sera la valeur NAN qui sera renvoyé*/
 unChiffre=parseFloat(unChiffre);
 console.log(unChiffre);
 console.log(typeof unChiffre);

 //------------------------ NUMBER=>STRING
 var nb_en_lettre=258;
 console.log(nb_en_lettre);
 console.log(typeof nb_en_lettre);
 
 var nb_en_lettre=nb_en_lettre.toString();
 console.log(nb_en_lettre);
 console.log(typeof nb_en_lettre);
 /*la methode toString() en JS permet de donner un aperçu de l'objet
 instancié.C'est à dire que cette methode va te retourner une chaine de caractere representant ton objet:affichage de la valeur des propriete.Termes mathematique
 pour une fonction quin permet de de determiner le reste de division d'une variablepar un nb préalablement defini
 ::---modulo de nb1%nb2 avec l'operateur modulo"%"*/
 resultat=nb1%nb2
 nb1=11
console.log(resultat);
console.log("le reste de la division de "+nb1+"par"+nb2 +"est égal à "+resultat);
/*
-------------------------LES ECRITURES SIMPLIFIEES-----------------------------------------*/
nb1=15;  nb1=nb1+5;
console.log(nb1);
nb1+=10;//nb1 luimême+ quelque chose
console.log(nb1);
//pr les autres operateur c'est le même raccourcit(+,-,*,/,%).







