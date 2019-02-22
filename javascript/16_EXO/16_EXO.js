/*var red=press >140 ;
var counterblock=press<139;

document.addEventListener("keyup", keyUpHandler, red);
document.addEventListener("keydown",keydownHandler, counterblock); function keyUpHandler(e) {
    if (elt.value == 139) {
        red<140 ;
    }
    else if (elt.value==140) {
        counterblock >139 ;}
        alert('coucou');*/
      var tweetText=document.querySelector('#tweetContent');
         var tweetCount=document.getElementById('counterBlock');
         //2
         function count(){
             //la fonction calcule la longueur de la chaine caractere contenu ds le texearea
 var count=140 - tweetText.value.length;

//et afficher cette valeurds la balise p#counterBlock grace à innerHTML
 tweetCount.innerHTML=count;
        
         if(count<0){
//la fonction calcule la longueur de la chaine
 tweetCount.classList.add('red');
         }
 else if(count>=0){
 tweetCount.classList.remove('red');
 }}
 tweetText.addEventListener('keyup',count);
 count();