
/*------------------------------VARIABLES----------------------------------------------------------------------
recherche du bouton ds l'arbre DOM,le DOM est une interface de programmation d'application('API)pour des docs HTML validesz et XML bien formés,il definit la structure
logique d'un doc et la maniére d'y acceder et de le manipuler.*/
var bouton=document.getElementById('toggle-ectangle');
//echerche du rectangle ds l'arbre DOM
var rectangle=document.querySelector('.rectangle');


/*--------------------------------------FONCTIONS---------------------------------------------

1-fonction au click sur le bouton
la methode toggle() va ajouter ou supprimer la class(tel un interpreteur)*/
function surClicBouton(){
    rectangle.classList.toggle('hide');
} 
/*-----------------------fonction au double click sur rectangle------------------*/
function auDoubleClicSourisRectangle(){
rectangle.classlist.toggle('good');
}
/*3- A l'entrée du survol du rectangle */
function auSurVolSourisRectangle(){
    rectangle.classlist.add('important');
}
/*a la sortie du sur vol du rectangle
la methode .remove() va ajouter la cloass css.*/
function aSortieSourisRectangle(){
    rectangle.classlist.remove('good');
    rectangle.classlist.remove('important');
}
/*---------------------------ECOUTEURS D EVENEMENT-------------------------------

------------------------parametre:l'evenement----------------

2nd paramétre :la fonction a executer


1- Installation d'un gestionaire d'evenement au click sur le bouton */
bouton.addEventListener('click,surClicBouton');
/*la methode "addEventListener()" met en place une fonction àn appeler chaque foisque l'evenementspecifieb est remis à la cible.Les cibles
sont un element,le doc lui-même est un window,ms elle peut être tt objet prenant en charge les evenements (comme XMLHttpRequest)

/*2- Installation d'un gestionaire d'evenement au double-click sur le rectangle */
rectangle.addEventListener('dblclic,auDoubleClicRectangle');
/*3-Installation d'un gestionaire d'evenement au survol sur le rectangle*/
rectangle.addEventListener('mouseover',auSurvolSourisRectangle);
/*--Installation d'un gestionaire d'evenement à la sortie du survol du rectangle*/
rectangle.addEventListener('mouseout',aSortieSourisRectangle);
