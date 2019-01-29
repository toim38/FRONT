/*
l'operateur ET :&& ou AND
--si je cumule 2 conditions:
=>prenom===prenomlogin
=>monAge===agelogin{
pour que les2 correspondent il faut les associer afin de validerif((prenomlogin===prenom )&&(agelogin===monAge))
/*------code-----------*/
/*je ne rentre ici que les 2 conditions vraies}
if((A)&&(B)){....}
=>si A est FAUX et B est VRAI=>FAUX
=>si A est VRAI et B est FAUX=>FAUX
=>si A est FAUX et B est FAUX=> FAUX
=>si A est VRAI et B est VRAI=>VRAI
/* l'operateur OU:||ou OR (|pipe =>alt gr+6)
/*
if((C)||(D)){......}
=>si C est FAUX et D est FAUX=>FAUX
=>si C est FAUX et D est VRAI=>VRAI
=>si C est VRAI et D est FAUX=>VRAI
=>si C est VRAI et D est VRAI=>FAUX
*/
/*  l'operateur "!" signifie :le contraire de var utilisateurlog=true;
if (!utilisateurlog){si l'utilisateur n'est pas loggé.}
//ce quin revient à ecrire :if(utilisateurlog==false){si l'utilisateur n'est pas loggé.}*/
//var nb1=prompt('saisir nombre');
//var nb2=prompt('saisir un autre nombre') ;
/*var inferieur=nb2,nb1=superieur;
prompt ('quel le plus petit nb')=nb1 OR nb2;
document.write

var inferieur=('nb2 < nb1');
var nb1 
console.log('quel nb est plus petit');*/
/*var c=('nb1<nb2'),d=('nb1>nb2'),a=('nb1===nb2');
if((nb1==nb2))*/
var nb1=prompt("votre 1er nombre");
var nb2=prompt("votre 2nd nombre");

if(isNaN(nb1) && (!isNaN(nb2))) {
if(nb1<nb2){
document.write("votre 1er nombre:" + nb1 + " est plus petit que votre 2nd :" + nb2);
}else if(nb1>nb2)
{document.write("votre 1er nombre :" + nb1 + "est plus grand que votre 2nd :" + nb2);
}else{document.write("votre 1er nombre:"+nb1+"est egal à votre 2nd:"+nb2);
}else{

    alert('vous n avez pas saisi de chiffre');}


