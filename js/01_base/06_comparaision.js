
alert("js oklm !");

/*javascript fournit 3 operat°permettant de comparer des valeurs:
=> l'égalité (ou identité ou <<triple egal>>)utlisant"===",
=>l'egalite faible( ou <<double egal">>)utilisant 
object.is() (ajouté avecECMAscript 2015)
operateur de comparaison==signifie'egale à'
il permet de verifier que les valeurs de 2 variables sont identiques.*/
var nb1=123;
var nb2=123;
console.log(nb1==nb2);//retourner TRUE.
//OPERATEUR DE COMPARAISON===signifie strictement egal à
//ilpermet de verifier la valeur et le type
//l'operateur ! signifie different en valeur 
console.log(nb1 != nb2);//retourner FALSE strictement different

// operateur!==
console.log(nb1!== nb2);//retourner FALSE


//EXERCICE //

/*J arrive sur un espace securise au moyen du prenom et de l'age
je dois saisir mon prenom et mon age pour être authentifié sur le site(les infos sont en BBD,ds mes variables prenom et age)
en cas d'echec une alerte m'informe du probleme,si tout se passe bien,un message de bienvenue m'accueille.*/
//demander le prenom.
var prenom=prompt('quel est le prenom?');
window.prompt=prenom;