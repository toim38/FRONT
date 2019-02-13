/*var nb=(prompt("choissez votre nb", "<saisir un chiffre entre 2 et 9"));
for(nb=1;nb<=10 ;nb++);
document.write("la table de multiplicatication"+nb+)*/
var choix=prompt("choisis un nombre:");
if ((choix>=2)&&( choix<=9)) {
    for(var i=1;i<=10;i++){
        var res=choix*i;
        document.write(choix+"x"+i+=+res+"<br/>");
    }
}else{
    document.write("<h4>le chiffre doit être entre 2 et9!</h4>");
}
