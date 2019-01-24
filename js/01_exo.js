
var longueur=prompt("quelle est la longueur du rectangle");
var largeur=prompt("quelle largeur du recdtangle");

function surfaceRectangle(){
    var largeur;
    var longueur;

    largeur=prompt("quelle largeur du rectangle?");
    longueur=prompt("quelle longueur du rectangle?");

    alert("la surface vaut" +longueur*largeur);
    alert("le perimetre vaut" +2(number(longueur)+number(largeur)));
}