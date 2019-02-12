
/*var heure =prompt("quelle heure est-il ?","saisir l'heure") ;
if (heure === "0.59.59")
{document.write("l'heure donnée" +heure+ 1.0.0);}
else if ((heure===14)||(minute===17)||(seconde===59 ))
{document.write("l'heure est"+heure+"14.18.0");}*/
/*----------------correction----------------------*/

/*declarer 3 valeurs :heure,minute,seconde*/
var heure=prompt("entrez une heure");
var minute=prompt("entrez les minutes");
var seconde = prompt("entrez les secondes");

if ((heure>=0) && (heure<=23) && (minute>=0) && (minute<=59) && (seconde>=0) && (seconde<=59)){seconde++;
//on incremente les seconde(seconde++)//
if (seconde===60)//on met les secondes à 0 et on passe à l'heure suivante//
seconde=0;
minute++;
if (minute===60){//on met les mn à 0 et on passe à l'heure suivante//
minute=0;
heure++;
if(heure===24){//l'heure suivante est minuit
heure=0;
}
//affichage de l'heure//

{document.write("<h3> dans une seconde il sera"+heure+"h"+minute+"m"+seconde+"s"<h3>")}