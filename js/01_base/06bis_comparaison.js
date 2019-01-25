/*javaScript fournit trois opérations permettant de comparer des valeurs:
=> l'égalité strict (ou identité ou <<triple égal>>) utilisant "===",
=> l'égalité faible (ou <<double égal>>)utilisant ==,
=> Object.is()(ajouté avec ECMAScript 2015)*/
// L'opérateur de comparaison == signifie 'égale à'
// il permet de vérifier que les valeurs de 2 variables sont identiques.
//var nb1 = 123;
//var nb2 = 123;
//console.log(nb1 == nb2);//retourner TRUE.
// l'opérateur de comparaison === signifie 'strictement égal à'
//Il permet de vérifier la VALEUR et le type
//console.log(nb1 === nb2); //retourner TRUE
//---L'opérateur != signifie 'différent de .....en VALEUR'
//console.log(nb1 != nb2); // retourner FALSE
// L'opérateur !== signifie strictement 'strictement différent de .....
// en VALEUR et en TYPE'
//console.log(nb1 !== nb2); //retourne FALSE
/*------------EXERCICE-------------*/
/*J'arrive sur un espace sécurisé au moyen du prénom et de l'âge
Je dois saisir mon prénom et mon âge pour être authentufié sur le
site ( les infos sont en BDD, ici dans mes variables prénom et âges)
En cas d'echecs une alerte m'informe du probleme.
Si tout se passe bien, un message de bienvenue m'accueille.*/
var prenom, monAge;
prenom = "Sandra";
monAge = 25;

// 1 -- Demander son prénom à l'utilisateur avec un prompt
var prenomLogin = prompt("Quel est votre prénom ?");
// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base
//de donnée (prenom)
if (prenomLogin === prenom) {
    //alert('test');
    // 2a. Si tout est ok, je continue la vérification avec l'âge
    // 2a1. Demande a mon utilisateur son âge via un PROMPT
    var ageLogin = parseInt(prompt("Votre âge ?"));
    if (ageLogin === monAge) {
        alert("Bienvenue " + prenomLogin);
    } else {
        // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
        alert("Erreur d'âge");
    }
} else {
    // 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
    alert("Attention, prénom non reconnu");
}


var prenom, monAge;
prenom = "Sandra";
monAge = 25;
mdp = "herisson";

var prenomLogin = prompt("Quel est votre prénom ?");

if (prenomLogin === prenom) {
    var ageLogin = parseInt(prompt("Votre âge ?"));
    if (ageLogin === monAge) {
        var mdpLogin = prompt("Le mot de passe ?")
        if (mdpLogin === mdp) {
            alert("Bienvenue " + prenomLogin);
        } else {
            alert("Pb de mot de passe !");
        }
    } else {
        alert("Erreur d'âge");
    }
} else {
    alert("Attention, prénom non reconnu");
}