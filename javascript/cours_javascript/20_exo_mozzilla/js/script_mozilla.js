//alert('ok!');
//fonction qui switcher l'image qd on clique dessus
var monImage=document.querySelector('img');
//on stocke ds la varable la 1ere image querySelectorAll c'est pour recuperer toutes les images 
/*var monImage=document.querySelectorAll('img')[0];*/
console.log(monImage);
//on va utiliser la methode "addEventListener"pr ajouter unn ecouteur de click sur l'image.
//addEventListener attend 2 evenement  la chose (evenement est le click)l'action(changer d'image)
monImage.addEventListener('click', function(){
/*recuperer ds une variable ma src ,la valeur actuelle de l attrributsrc de monImage;
on va utilise la methode getAttribute(),
l'argument attendu pr cette methode est le nom d'un attribut de balise html(ici c'est src)*/
var maSrc=monImage.getAttribute('src');
console.log(monImage);
/*si la valeure de la variable maSrcest égale à 'images/maquette_exo_mozilla.png alors on fait 1 alerte
alert("je suis l'image 1")
sinon alert (maSrc+"n'est pas l'image1")
1ere version de cette condition pr tester
if(condition){instruction 1;
}else{
    instruction 2;
}*/
/*if(maSrc==="images/logo_firefox_1.png"{
    alert("je  suis l'image 1 ");
}else{
    alert("je ne suis pas l'image 1");
}*/
/*on va intervertir les imagesavec setAttribute qui attend 2 arguments:- ciblés"src"
                                                                       -sa nouvelle valeur(qui est images/maquette_exo_mozilla.png)*/
    if (maSrc ==="images/logo_firefox_1.png"){
        alert("je suis l'image 1,ma source est:"+maSrc);
        monImage.setAttribute('src','images/logo_firefox_2.png');
    }
    else{
alert("je ne suis pas l'image 1,ma source est:"+ maSrc);
monImage.setAttribute('src','images/logo_firefox_1.png');
    }
}); // fin

   /* ds le code cidessus on a fait:
   1/qd on clique sur l'image(ds la fonction addEventListener)
   2/on utilise la structure conditionelle if else pr voir si la valeur de l'attribut src est = au chemin de l image originale
   3/ si c'est le c as on change la valeur de l'attribut en lui indiquant le chemin de la 2nd image
   4/si ce n'est pas le cas alors la valeur de l'attribut source revient à sa valeur initiale




/* ajouter un message d'accueil personalisé
on va changer le titre de la page pr inclure 1 message pr le visiteur du site qui sera conserver qd il quittera le site et s'il revient après
on va conserver le message ds le navigateur ds l'API Webstorage.au final on ajoutera une option au bouton pour pouvoir changer l'user et le message d'accueil si besoin*/
var monTitre=document.querySelector('h1');
console.log(monTitre);
/*2eme etape : recupere ds 1 variable monBouton la 1ere balise button  du doc*/
var monBouton=document.querySelector('button');
console.log(monBouton);
//preparer la fonction de message d'accueil(quin sera invoqué,declenché +tard)
function definirNomUtilisateur(){
    var monNom=prompt('Ecris ton prenom');
    localStorage.setItem('nomUtilisaeur', monNom);
    monTitre.textContent="Bienvenue"+monNom;
}
//au final on utilise  monTitre.textContent pr lui affecté1 nouveau contenu
/*tester sin le nom n'st pas ds le cach ,s'il n'y a pas on demande avec prompt son nom à l'utilisateur(declenche la fonction definirNomutilisateur)
s'il y est on le recupére et on affiche ds le titre .*/
if(!localStorage.getItem('nomUtilisateur')){
//instruction1
definirNomUtilisateur();
}else{
//instruction2
var nomEnregistre=localStorage.getItem('nomUtilisateur');
monTitre.textContent="bienvenu à nouveau"+ nomEnregistre;
}

monBouton.addEventListener('click',function(){
    definirNomUtilisateur();})

/*au cklick sur le bouton ,invoquer la fonction definirmonNomUtilsateur()*/
/*le block de la conditionelle if else utilise l'operrateur de negation NON pr verifier si le njavigateur possede 1 donnée entregistrée
dite nomutilisateur ou pas.
sinon la fonction definirNomUtilisateur(] est evoquée pr créer cette donnée
    si elle exuiste on recupére la methode getItem 
    on definit le contenu de textContent pr le titre avec 1 concatenationde chaine suivi du nom de l'user