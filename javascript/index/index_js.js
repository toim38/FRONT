//alert('jS Okay'); Pour vérifier que mon fichier jS est bien relier à mon HTML.

/* Syntaxe de base */

// Deux slash pour faire un commentaire uniligne

/*
   Ici je peux faire un commentaire
   sur plusieurs lignes
*/

// -- 1 : Déclaration d'une variable en jS
var Prenom;

// -- 2 : Affecter une valeur
var Prenom = "Touhami";

// -- 3 : Une instruction se termine TOUJOURS par un point-virgulr, aussi il est possible d'écrire plisieurs instruction sur une seule ligne
var instruction_1;
var instruction_2, instruction_3;

//-- 4 : Afficher une boite de dialogue (2 façons)
alert("WOW ! Tu es sur ma page !");
window.alert("WOW ! Tu es sur ma page !");

// -- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(Prenom);

// -- 6 : Afficherdu texte dans une page web
document.write('Bonjour à tous !');
//--7:demander à l'utilisateur une valeur (2 facons)
var retournerValeur = window.prompt ('question:on est quel jour?','saisissez le jour de la semaine');
var retourneValeur = prompt('question:on est quel jour?,saisissez le jour de la semaine');
//--8 :attentioàn jS est sensible à la casse
//   mavariable=/=mavariable
//--9 une variable ne commencer par un chiffre,ne contient que du alphanumeriquepas un mot reservé(vfar,for....des elements natifs du langage jS)
//https://developper.mozilla.org/fr/docs/web/javaScript/reference/mots_r%c3%A9serv%c3%A9s

//--10:une variable peut être declarée de façon explicite:
var prenom="touhami";
//--ou implicite
prenom="touhami";
//--1.chaine de caractere (string)
var destination="guadaljara";
var vacances="2017";

//--2.un nb entier (integrer)
var annee=2017;
//--3 nb decimal(float)
var nombre_a_virgule=-5.32;

//--un boolean (boolean=vrai/faux=true/false)
var unboolean=false;
//--true
//--5.les constantes /*la declaration constante' permet accessible uniquement en lecture
//--contrairement à une variable sa valeur ne peut pas etre changée par une reaffection + bas ds le code*/
//--par conventiion les constantes sont en majuscule

const PAYS ="France";
console.log(typeof"annee")
typeof(annee);
typeof(destination );
typeof(nombre_a_virgule);
typeof(unBoolean);

/*================================================================================================================================*/
            // intro     JS    &    Algo
/*=======================================================================================================================*/
                                           //    LA CONCATENATIION

 /*================================================================================================================*/
 var x = "touhami";
 console.log('Bonjour' +x+'Ba,comment ça va');   
 //1er exemple
 var annee=2017;
 var mois=3;
 var calcul=annee+mois;
 console.log(calcul);
 //console.log(annee+mois)
 document.write(calcul+"<br>");
 //je reaffecte une valeur à ma variable mois
 mois="7";
 var calcul=annee+'/'+mois;
// balise parlante càd au lieu de 3mois on ecrit plusTroisAns
console.log(calcul);
document.write(calcul+"<br>");

var DebutDePhrase = "Aujourd'hui ";
var NombreDeStagiaires = " 9 ";
var SuiteDePhrase = " stagiaires ";
var FinDePhrase = " sont présent.<br>";


//ns souhaitons afficher tt ça en 1 seul morceau grâce à la concatenation
document.write(DebutDePhrase+NombreDeStagiaires+SuiteDePhrase+FinDePhrase);

/*EXERCICE:
creez 1 concatenation avec les infos suivantes:
---------------*/
var phrase1="je m'appelle";
var phrase2="sandra et j'ai";
var age="375";
var phrase3="ans";

/*correction*/
document.write(phrase1+phrase2+age+phrase3);
/*___________________________________________________________________________________________________________________________________

                                                         LES OPERATEURS ARITHMETIQUES
_____________________________________________________________________________________________________________________
~##############################################################################################################################################
                  l'addition*/
 // =======================================declaration de plusieurs variables à la suite =========================================//

var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'opérateur "+"
resultat = nb1 + nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Soustraction ######## //
// -- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Multiplication ######## //
// -- Multiplication de nb1 et nb2 avec l'opérateur "*"
resultat = nb1 * nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Division ######## //
// -- Division de nb1 et nb2 avec l'opérateur "/"
resultat = nb1 / nb2;

// -- Affichage du Résultat dans la Console.
console.log("Le Résultat de " + nb1 + " / " + nb2 + " est égal à : " + resultat);

// ######## Modulo ######## //
// -- NB : Le Modulo retourne le reste d'une division.

// -- Modulo de nb1 et nb2 avec l'opérateur "%"
nb1 = 11;
resultat = nb1 % nb2;

// -- Affichage du Résultat dans la Console.
console.log("Le Reste de la Division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);
 //====================================diivision===========================================

//  division nb1/nb2 avec l'operation
resultat=nb1/nb2;
//  affichage resultat
console.log(resultat);


 /*===========ECRITURES SIMPLIFIEES===================*/
nb1=15;
nb=nb1+5;
console.log(nb);

nb1+5;//--ce qui equivaut à nb1=nb1+5
/*ici on a incremente et reaffecte*/
console.log(nb1);
 /*je peux faire pareil avec les autres operateurs:+,-;*,/
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
 /*     INCREMENTE & DECREMENTATION
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
varnb=1;
nb1=nb1+1
//affichage//
console.log(nb1)
//ecriture simplifiées
nb1++
console.log(nb1);
//======================================================================================================================
                         /*  LES CONDITIONS
 ================================================================================================================*/
                       

var MajoriteFR=18;

if(MajoriteFR>=18){//si ma condition est vrai (boolean=TRUE/VRAI)
    alerte("bienvenue");}
else{//sinon=>ma condition est fausse(boolean=FALSE/FAUX)
    alerte("allez voir ailleur!");}




/*EXERCICE
Créer une fonctioçn permettant de verifié l'age d'un visiteur.
S'il est majeur alors "bienvenu"
sinon redirection vers google aprés lui avoir signalé le soucis.*/
/*     CORRECTION   */
//1----declaration de la variable  de reception:
var age=prompt("quel age avez-vous?","<saisis>")

//2---ma condition
if(age>=18){
    alert("bienvenu sur mon site");
    }else{
        document.location.href="https://www.google.com";
    }

 
 