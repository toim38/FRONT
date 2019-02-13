var disMoi="";
var i=0;
while((disMoi !=="oui")&&(disMoi !=="non")){
    dismoi=prompt("alors on joue au ni oui ni non ?");
    document.write(disMoi+"pour la"+i+ "° fois,dis moi oui ou non!<br/>");
    i++
}
document.write("<h1 style='background-color:cyan;text-align:center;'>Fini;-)!</h1>")