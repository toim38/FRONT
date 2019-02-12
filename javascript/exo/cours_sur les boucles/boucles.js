


/*
les boucles permettent de repeter des actions rapidements et simplement.
une boucle peut être vu comme une version informatique de copierv N lignes 
ou de faire X fois qq chose ex js peut traduire faire 5 pas vers l'est 
avec cette boucle*/
/*var pas;
for(pas=0 <5;pas++){
/*ceci sera 5 fois exectué,a chaque execution la variable pas augmente de 1
lorsque elle arrive à 5 la boucle se ferme =>termine*/
//console.log("faire un pas vers l'est")
//}
/*il y ba differents type de boucke ms elles se ressemblent,vu qu'ellerepetent une action un certain nb de fois
les differents type permettentd'avoir differentes de commencer ou de finir une boucle qui sera utilisé en fonction de la situation
et du pb qu'on veut resoudre 


------les boucles--------------



----------la boucle FOR---------------



for (3 arguments )(objet argument est semblable à un tableau correspondant aux arguments passés à une fonction)



----------------------code----------------------







1-initialise un compteur à partir de combien je compte(par defaut le compteur a une variable'1')

2-la condition à verifier qui doit être vrai(TRUE)
3-le pas dincrementation(combien j'ajoute à chaque tour,generalement 1 donc i++)*/
//for(var i=1;i<=10;i+=2){
    //document.write("<p>Instruction executée:"+i+"</p>");
//}
/*-----------------------LA BOUCLE WHILE (tant que)
    tres utlisée lorsqu'on ne connait pas le nb de tour de boucle à l'avance.*/
    // var j =1;
    /*while(j<=10){
        document.write("<hr/><p>Instruction exécutée:"+j+"</p>");
       /* 50 lignes de codes*/
       //j++;//j=j+1;ou j+=1;}
       /*---------------------------EXERCICE--------------------------------------------


       J'ai mille euro sur mon compte ,chaque mois j'ajoute50€
       combien de temps faut-il pour avoir 2000€ sur mon compte?*/
      /* var a = 2000;
       var i =1000;
       var (i + 1) = 1050;
       for i=50;i<=1000;i+=1050;
       {
           document.write("<hr/><p>combien de temps pour arriver à" (2000=a )"</p>");
       }*/

       /*----------------------------CORRECT°--------------------------------------------*/
      /* var monCompte=1000;
       var temps=0;
       while(monCompte<2000){
           monCompte+=50;
           temps++;}
           document.write("<h3> Sous sur mon compte:"+monCompte+"</h3>");
          document.write("jusqu'à2000€,il me faut:"+ temps+"mois</h3>");
           document.write("<h3>jusqu'à 2000 € il me faut:"+temps/12+"année</h3>");
       /*document.write("<h3>jusqu'à 2000€ il me faut:"+temps+"<h3>");*/
          //----------------LA BOUCLE-FOR---------------------------------
  
       var tps=0;
       for(var mesSous=1000;mesSous<2000;mesSous+=50){
           document.write("<h3> le mois suivant j'ai:"+mesSous+"</h3>");
           tps++;

       }
       document.write("<h3> il aura fallu"+tps+"mois</h3>");