const Lien = () =>  {

function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,300,event);
  };
}

//https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
//Utiliser les objets, arrays avec les données
//Centraliser les timeline, au pire variables en haut ce serait bien. 
    


Array.prototype.removeByValue = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}



let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

let sphereBasse = true;
let lien = select(".lienAmbulant");
let lienSvg = select(".lienTourni");
let lienIndice = select(".lienIndice");
let infoDispo = false ;
let croix = select(".croix");
let lienPos = lien.getBoundingClientRect();
let lienPosBas;

//resize est un bon exercice => un peu inutile
//je vais le garder sous le coude pour voir comment faire

let cercle = select("#lienCercle"); //1px de r et x10 par scale => height après

let fond = select(".lienFond");

let heightMax = window.innerHeight ;
let widthMax = window.innerWidth ;

const heightMaxStart = document.documentElement.clientHeight ;
// const widthMaxStart = window.innerWidth ;

let ready = true;
let once = true;
let processChangeBas;
let lienCercleHeightMax = 100000;

let complete = false;


let objet = parseFloat(lien.offsetWidth); 


// let vitesse = 200;
let vitesse = 75;//plus lentement pour le spawn le temps de distribuer qui joue et revient...

let temps = ((heightMax+widthMax)/2)/vitesse ; //setup le bon timing de la page
let lienBasScaleMax = (heightMaxStart-22)/(2*10);
  let lienScaleMax = (heightMaxStart-22)/(2*10);


gsap.defaults({
  ease: "power4.Out",
  duration: temps

})
;


/* Setup pas responsive car xTo et yTo ne sont pas rafraichis
function Mouv() {

  let xTo = gsap.quickTo(lien, "x", {onComplete:Mouv2}),
  yTo = gsap.quickTo(lien, "y", { });


  
  gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});


  console.log(widthMax*0.8, heightMax + objet);

  xTo(widthMax*0.8);
  yTo(heightMax + objet);



}*/



window.addEventListener("resize", debounce(function(e){ 
  heightMax = window.innerHeight ;
  widthMax = window.innerWidth ;
  //temps = ((heightMax+widthMax)/2)/vitesse); ralenti le temps avec la taille de la page
  temps = ((heightMax+widthMax)/2)/vitesse;
 // console.log(temps);
  gsap.defaults({
  duration: temps


  });


    
}));


  //for each info bientot

  let infos = [] ;



// const info1 = document.createElement("div");
//   info1.innerHTML = "info 1";

//array d'infos dans une info => dans l'ordre on a le texte(0) et le lien(1)

const infoFleur = [
  "Chaque dollar investi en UX se traduit par un rendement entre 2 $ et 100 $. Si vous vouliez avoir un aperçu du retour sur investissements UX, le voici, en cliquant le lien en-dessous",
  "abstract / https://www.thetimes.co.uk/article/i-m-so-sorry-says-inventor-of-endless-online-scrolling-9lrv59mdk >"
];
  
const infoLorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie vestibulum ipsum, ut accumsan dolor ultrices in. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie vestibulum ipsum, ut accumsan dolor ultrices in. Suspendisse potenti. Cras lobortis tortor enim, id egestas sem malesuada eget. Sed arcu massa.",
  "abstract / https://www.thetimes.co.uk/article/i-m-so-sorry-says-inventor-of-endless-online-scrolling-9lrv59mdk >"
];


const infoIpsum = [
  "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in lacinia mi. Mauris fermentum congue convallis. Cras lobortis tempor urna, sit amet rutrum metus scelerisque eu. Nam blandit bibendum eros id rhoncus.",
  "abstract / https://www.thetimes.co.uk/article/i-m-so-sorry-says-inventor-of-endless-online-scrolling-9lrv59mdk >"
];

const infoDoloret = [
  "J'aime bien les fleurs. In in lacinia mi. Mauris fermentum congue convallis. Cras lobortis tempor urna, sit amet rutrum metus scelerisque eu. Nam blandit bibendum eros id rhoncus.",
  "abstract / https://www.thetimes.co.uk/article/i-m-so-sorry-says-inventor-of-endless-online-scrolling-9lrv59mdk >"
];


// const info2 = document.createElement("div")
//  info2.innerHTML = "info 2";


// const info3 = document.createElement("div")
//  info3.innerHTML = "info 3";

 infos.push(infoFleur, infoLorem, infoIpsum, infoDoloret); //ordre qui sera change

// let numeros = [1, 2, 3] ; //je sens qu'il va falloir faire un forEach pour 
//mettre tous les éléments




  // let butx, buty ;

  let processChange;
// question.png

  let numeros = [] ;
  let recherches = [];

  let inventaire = select(".inventaireHaut");

  infos.forEach( function(info, index) {
    numeros.push(index);

    recherches[index] = document.createElement("img");
    // recherches[index].setAttribute("src", "/images/question.png");
    recherches[index].classList.add("pointer");
    recherches[index].classList.add("fauxblanc");

    inventaire.appendChild(recherches[index]);


  });

  console.log(recherches);






  //  gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

  //  xTo(widthMax*0.8);
  //  yTo(heightMax + objet);

   

  //  function Interieur(){ //parfait avec le scope de cp.

  //   xTo(widthMax*0.8);
  //   yTo(heightMax + objet);
    
   
  // }


//     gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

//    xTo(widthMax*0.35);
//    yTo(0 - objet);

   

//    function Interieur(){ //parfait avec le scope de cp.

//     xTo(widthMax*0.35);
//     yTo(0 - objet);
    
   
//   }


//    gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

//    xTo(widthMax*0.25);
//    yTo(heightMax + objet);

    

//    function Interieur(){ //parfait avec le scope de cp.

//     xTo(widthMax*0.25);
//     yTo(heightMax + objet);
    
    

    let contenu = select(".info");
    let a = select(".sourcea"); //bien selectionner direct en classe
    let text = select(".lienAmbulant textPath");
    let bas = false;

    let index;



function Mouvements() {
  ready = true; //attaque parce qu'aucune animation ne joue
       once = false;
   index = numeros[gsap.utils.random(0, numeros.length-1, 1)]; //objet si possible pas index, pas relie 
   //au bon objet quand il y en a moins, ça reduit juste la chance d'avoir celui qui manque, (un peu)
  // let index = gsap.utils.random(0, numeros.length-1, 1);


  if( index < 0 || numeros.length == 0) {
    console.log("complet") ;
    complete = true;

  } else {
     // console.log(numeros) ;
     // console.log(index) ;
    Mouv(index) ;
     

  }
   












  
  // console.log("infoIndex" + infoIndex)


/*  numeros.splice(0, 1);
  console.log(numeros);

  numeros.splice(0, 1);
  console.log(numeros);*/





    // infoIndex = -1; //pour n'avoir aucun match



     


}


    let entree = true;

let lienBas = select(".fondBas");
let lienSvgBas = select(".svgBas");


Mouvements();
  
  
  function Mouv(i) {



//LANCEMENT LANCEMENT LANCEMENT ----------------- LANCEMENT LANCEMENT LANCEMENT
    let tweenP = false;





    // let transformation = gsap.timeline() ;
 


    // console.log(infos[i]);

    lienSvg.classList.add("lienTourni");



  if(processChange) {

   window.removeEventListener('resize', processChange);

  }

    heightMax = window.innerHeight ; //tout initialise ici car il y aura le calcul de fait dans resize //ne pas
    //mettre dans les parametres de la fonction car le width et tout est deja calcule.
  widthMax = window.innerWidth ;


  let setx = [-50-objet, widthMax*0.4, widthMax*0.85, 0-objet]; //automatiser les arrays de setup en int les donnes infos, contenus et image
  let sety = [heightMax*0.3, 0-objet, 0-objet, heightMax*0.85];  

  let butx = [widthMax*0.65, widthMax+objet, widthMax*0.25, widthMax+objet];
  let buty = [heightMax+objet, heightMax*0.5, heightMax+objet, heightMax*0.94];



  // console.log(i);
  //     console.log(setx[i], sety[i], butx[i], buty[i]);
 
    let xTo = gsap.quickTo(lien, "x", {onComplete: Mouvements}),
    yTo = gsap.quickTo(lien, "y", { });

    // function ifNotEvent() { //si c'est en dessous normal = ça ne va pas s'activer
    //   if(ready == true) {
    //   Mouvements();

    //   }
    // }
   gsap.set(lien, {x : () => setx[i], y : () => sety[i]});

   xTo(butx[i]);
   yTo(buty[i]);

   

   function Interieur(){ //parfait avec le scope de cp.
    heightMax = window.innerHeight ;
    widthMax = window.innerWidth ;
    lienPos = lien.getBoundingClientRect();
    // console.log("cercle " + cercle);


    

  let setx = [-50-objet, widthMax*0.4, widthMax*0.85, 0-objet]; //automatiser les arrays de setup en int les donnes infos, contenus et image
  let sety = [heightMax*0.3, 0-objet, 0-objet, heightMax*0.85];  

  let butx = [widthMax*0.65, widthMax+objet, widthMax*0.25, widthMax+objet];
  let buty = [heightMax+objet, heightMax*0.5, heightMax+objet, heightMax*0.94];

    if(tweenP == true) {
      gsap.set(lien, {transformOrigin:"centre", x:"50vw", y: "50vh"});
/*      xTo.tween.pause(); //on arrete les anims ici aussi même en resize car sinon xTo normal
      yTo.tween.pause(); deja on resize, donc pour ne pas avoir de conflis
*/
    } else {

      xTo(butx[i]);
      yTo(buty[i]);

    }

    if ((tweenP == true) && (lienPos.x > butx[i] || lienPos.y > buty[i])) {
      xTo.tween.kill();
      yTo.tween.kill();

    } 

     if (lienPos.x > butx[i] && lienPos.y > buty[i]) { //depasser les deux coordonnes
      // console.log("oui, il part à x ou à y");
      // console.log("lienPosx " + lienPos.x );
      // console.log("lienPosy " + lienPos.y );  
      // console.log("butx " + butx[i] );
      // console.log("lienPosy " + buty[i] );
      // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");


      // numeros.splice(i, 1);
      Mouvements();

    }

      // var element = document.getElementById("elementID");
  // returns matrix(1,0,0,1,0,0)
      var matrix = window.getComputedStyle(lienSvg).transform;
      var matrixArray = matrix.replace("matrix(", "").split(",");
      var scaleX = parseFloat(matrixArray[0]); // convert from string to number
      var scaleY = parseFloat(matrixArray[3]);
      // bonus round - gets translate values
      var translateX = parseFloat(matrixArray[4]); 
      var translateY = parseFloat(matrixArray[5]); // parseFloat ignores ")"


      /*let scaleLienSvg =  parseFloat(lienSvg.style.transform);*/
    /*  console.log(scaleLienSvg); //les données sont égales à celles du lien svg ici.
      console.log(lienSvg);//svg qui a subi l'operation, on peut voir que les donnéesmatch*/
    

      // console.log(scaleLienSvg);

      // console.log(lienScaleMax);




     
    if (scaleX < lienScaleMax) { //plutot que d'avoir acces a l'event de debounce => circuler e
      if (lienPosBas == false && complete == false) {
          gsap.to(lienSvg, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});

      } 

    }


      if (complete == true) {
        gsap.set(lienSvg, {transformOrigin:"centre", scale :0.3, y: "150vh", ease: "power2.out", duration:1.25});
     ;
        console.log("bas = complete = true");
        // gsap.to(lienSvgBas, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});
        // console.log("nonBas");

      }

    
   
  }
      // numeros.splice(i, 1);// pas à l'animation
    processChange = debounce(() => Interieur());
    window.addEventListener("resize", processChange);





//TRANSITION TRANSITION TRANSITION ----------------- TRANSITION TRANSITION TRANSITION


    


      lien.addEventListener("click", (e) => {
            //Master timeline inutile
            console.log("lien cliqué")
            contenu.innerHTML = infos[i][0] ;
            a.innerHTML = infos[i][1] ;
            let avance = gsap.timeline() ;
            tweenP = true;
            xTo.tween.kill(); //on arrete les anims
            yTo.tween.kill();
            lienSvg.classList.remove("lienTourni");
            // avance.set(cercle, {transformOrigin:"centre"})
            gsap.set(text, {opacity : 0, duration:0.2});
            let transformation = gsap.timeline({onComplete : Pose}) ;
            transformation.to(lien, {transformOrigin:"centre", x:"50vw", y: "50vh", duration:1});
            // avance.set(cercle, {transformOrigin:"50% 10%"});
            // avance.to(cercle, { y: "50vh", duration:1}, 0);
            transformation.set(fond, {zIndex :  100});
            transformation.to(lienSvg, {scale : () => (window.innerHeight-22)/(2*10), duration:1.5}); //moins 10 moins voir le decallage transfO
            transformation.to(fond, {opacity: 1, scale : 1, duration:1.5}, "<"); //on remet le texte en place
            
            once = true;
            ready = true; //rendre possible l'animation car on clic dessus
          
          });

      function Pose() {
        /*if (lienCercleHeightMax > cercle.getBoundingClientRect().height) {
          lienCercleHeightMax = cercle.getBoundingClientRect().height;
          console.log(" lienCercleHeightMax " + lienCercleHeightMax);

        } */

        lienPosBas = false;

      }
    

      // window.addEventListener("resize", (e) => {
      
      //     if (sphereBasse == true) {

      //         console.log("lien resize sans check");
      //     // xTo.tween.pause(); //on arrete les anims ici aussi même en resize car sinon xTo normal
      //     // yTo.tween.pause();
      //       if(tweenP == true) {
      //       xTo.tween.kill(); //on arrete les anims
      //       yTo.tween.kill();
      //     // xTo.tween.pause(); //on arrete les anims ici aussi même en resize car sinon xTo normal
      //     // yTo.tween.pause(); //il faut mettre pause 2* ??
      //       gsap.to(lienSvg, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});

      //       }
        
      //   }

      //   // if (sphereBasse == false) {
      //   //     gsap.to(lienSvgBas, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});
      //   //     console.log("info reste en haut " + bas);

      //   //   } 



      // })

      //fonction en dessous pour ne pas faire un event dans un event, un peu => buggy buggy
  
        let debut = false;
        let anim = false;
         let time ;
      croix.addEventListener("click", (e) => {
    
     // laisse le temps au calcul d'arriver 
           /*function Anim() {

            if (debut = false) {
            tweenP = false;
           
           
            console.log("anim");

            time = setTimeout(()=> {
              numeros.splice(i, 1);
              recherches[i].classList.add("oubli");
             Mouvements();


            }, 10)


            }
             
              

           }*/

      //il fallait rafraichir l'index inaccessible dans un event !!!
          if(bas == false && ready == true && once == true) { //si ce n'est pas en bas et qu'en bas ça ne joue pas (false)
            console.log("changement icone");
            recherches[index].setAttribute("id","rep0");
            recherches[index].classList.add("oubli");
            console.log("index " + index);
            numeros.removeByValue(index); //methode assistée par du boiler code en haut de la page!
            /*numeros.splice(index, 1);*/// autres methodes pour splice car celle-ci est trop lente
            //cache invisible ce serait bien cool
            let depart = gsap.timeline({onComplete : Mouvements}) ;
            depart.to(lien, {transformOrigin:"centre", scale :0.3, y: "150vh", ease: "power2.out", duration:1.25});
            depart.set(text, {opacity : 1}); //setup de la transition dessus et cette ligne
            // depart.to(lien, {transformOrigin:"centre", scale:0.3, y: "150vh", ease: "power2.out", duration:1.25});
            depart.to(fond, {opacity: 0, zIndex : -10, duration:0.7}, 0); //on retablit l'index du text => invisible
            depart.set(lien, {transformOrigin:"centre", scale :1});  //taille lien ambulant réinitialisé
            depart.set(lienSvg, {transformOrigin:"centre", scale :1}); //taille svg (enfant direct) réinitialisé
            console.log(numeros);
            lienPosBas = true;
            once = false;


            // ne pas aller trop vites non plus ici.




            }

         

      /*      if (anim == true) {
              
           

          
            

          
         
         
           

        }
*/
       // if (once == false) {   //debug un peu quand c'est bloqué, mais ça reste une faiblesse : la vitesse
       //   once = true; //il faudrait trouver un moyen de sauvegarder les données...

       //  }




        // function Oncefalse() {
        //    Mouvements();

        // }












        // infoDispo = true ;



         //le rendra a son etat initial

        




    

    

   
              

      })


 


}

//REVOIR REVOIR REVOIR----------------- REVOIR REVOIR REVOIR


//ouverture, je peux mettre une fonction qui va return les animations avec différents
//parametres, ici => le lien qui va etre utilisé.Il y en a que deux, alors ça va.



// let masterBas = gsap.timeline();




      recherches.forEach( function(recherche, i) {
             if(processChangeBas) {
              console.log("refresh resize");

                window.removeEventListener('resize', processChangeBas);

              }



        recherche.addEventListener("click", (e) => {
          if(recherche.classList.contains("oubli")) {
             bas = true; //la c'est en bas

              if (bas) {

              processChangeBas = debounce(() => InterieurBas());
              window.addEventListener("resize", processChangeBas);

              console.log("animation d'en bas qui arrive");
              // gsap.set(lienBas, {zIndex:-1});

              contenu.innerHTML = infos[i][0] ;
              a.innerHTML = infos[i][1] ;

              
              let transformationBas = gsap.timeline() ;
              transformationBas.to(lienBas, {transformOrigin:"centre", x:"50vw", y: "50vh", duration:1});
              sphereBasse = false;
              
              transformationBas.set(fond, {zIndex :  100})
              transformationBas.to(lienSvgBas, {scale : () => (window.innerHeight-22)/(2*10), duration:1.5}); //moins 10 moins voir le decallage transfO
              transformationBas.to(fond, {opacity: 1, scale : 1, duration:1.5}, "<"); //on remet le texte en place

        
                ready = false;
                croix.addEventListener("click", (e) => {
                   //joue une fois
                  console.log("l'info du bas se cache");
                  // console.log("clickCroix" + ready);
                  if (ready == false) {
                  console.log("CROIS JOUE")
                    let departBas = gsap.timeline({onComplete : FalseBas});
                    departBas.to(lienBas, {transformOrigin:"centre", scale :0.3, y: "150vh", ease: "power2.out", duration:1.25});
                    departBas.to(fond, {opacity: 0, zIndex : -10, duration:0.7}, 0);
                    departBas.set(lienBas, {transformOrigin:"centre", scale :1});
                    departBas.set(lienSvgBas, {transformOrigin:"centre", scale :1});
                    sphereBasse = true;
                    ready = true; //rend ensuite true pour sortir et accepter la suite



                  }

                    if (ready == true) { //débloque bien au cas où, ne peut pas y échapper
                    ready = false; //interessant dans la tactique : true/false => play once.
                    }


                function FalseBas() {
                  //on Complete => facultatif, c'est pour alourdir le fichier
                   bas = false;
                   // ready = true;
                   // console.log("oui, bas=false et ready" + ready);

                }


                
              
                })


       function InterieurBas() {
        console.log("interieur");
        //quand c'est on complete que j'ai active un indice et que je 'resize' => bug
        //le fond disparait en bas
        console.log("Interieur bas => sphereBasse " + sphereBasse);

        var matrix = window.getComputedStyle(lienSvgBas).transform;
        var matrixArray = matrix.replace("matrix(", "").split(",");
        var scaleX = parseFloat(matrixArray[0]); // convert from string to number
        var scaleY = parseFloat(matrixArray[3]);
        // bonus round - gets translate values
        var translateX = parseFloat(matrixArray[4]); 
        var translateY = parseFloat(matrixArray[5]); // parseFloat ignores ")"


      /*let scaleLienSvg =  parseFloat(lienSvg.style.transform);*/
    /*  console.log(scaleLienSvg); //les données sont égales à celles du lien svg ici.
      console.log(lienSvg);//svg qui a subi l'operation, on peut voir que les donnéesmatch*/


      
        console.log(lienSvgBas);
        console.log("scaleX " + scaleX);
        console.log("lienBasScaleMax " + lienBasScaleMax);
     
        if (scaleX < lienBasScaleMax) { //plutot que d'avoir acces a l'event de debounce => circuler e
          if (sphereBasse == false) {
              gsap.to(lienSvgBas, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});

          } 

        }


  /*        if (sphereBasse == false) {
            gsap.to(lienSvgBas, {scaleX : () => (window.innerHeight-22)/(2*10), scaleY : () => (window.innerHeight-22)/(2*10), duration:0.1});
            console.log("info reste en haut " + bas);

          } */

          // if (sphereBasse == true) {

          //   console.log("info reste en bas" + bas);
          //   gsap.set(lienBas, {transformOrigin:"centre", scale :0, y: "150vh", ease: "power2.out"});

          // }

       }

      // window.addEventListener("resize", (e) => {

      //   // if (sphereBasse == false) {
      //   //     gsap.to(lienSvgBas, {scale : () => (window.innerHeight-22)/(2*10), duration:0.1});
      //   //     console.log("info reste en haut " + bas);

      //   //   } 

      // })





            }


          }


        })


 






       entree = true;

      //fonction en dessous pour ne pas faire un event dans un event, un peu => buggy buggy
       //pas besoin d'une grande partie de l'event listener, deja au-dessus avec la base
      // croix.addEventListener("click", (e) => {
      //           gsap.to(lienBas, {transformOrigin:"centre", scale :0.3, y: "150vh", ease: "power2.out", duration:1.25});

      // })
        

  })



//   function Mouv2(infoIndex) {

//   if(processChange) { //même nom partout pour une seule et meme variable

//    window.removeEventListener('resize', processChange);

//   }



//     let xTo = gsap.quickTo(lien, "x", {onComplete:Mouvements}),
//     yTo = gsap.quickTo(lien, "y", { });


//     gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

//    xTo(widthMax*0.35);
//    yTo(0 - objet);

   

//    function Interieur(){ //parfait avec le scope de cp.

//     xTo(widthMax*0.35);
//     yTo(0 - objet);
    
   
//   }



    
//     processChange = debounce(() => Interieur());


//     window.addEventListener("resize", processChange);



//     lien.addEventListener("click", (e) => {
//       // console.log("click1");



//     })

//     numeros.splice(infoIndex, 1);
//     console.log(numeros)




// }



//   function Mouv3(infoIndex) {

//   if(processChange) { //même nom partout pour une seule et meme variable

//    window.removeEventListener('resize', processChange);

//   }



//     let xTo = gsap.quickTo(lien, "x", {onComplete:Mouvements}),
//     yTo = gsap.quickTo(lien, "y", { });


//    gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

//    xTo(widthMax*0.25);
//    yTo(heightMax + objet);

    

//    function Interieur(){ //parfait avec le scope de cp.

//     xTo(widthMax*0.25);
//     yTo(heightMax + objet);
    
   
//   }


//     processChange = debounce(() => Interieur());


//     window.addEventListener("resize", processChange);



//     lien.addEventListener("click", (e) => {
//       // console.log("click1");



//     })

//     numeros.splice(infoIndex, 1);
//     // console.log(infos)




// }





































//   function Mouv2(infoIndex) {

//      if(processChange) {
//    window.removeEventListener('resize', processChange);

//   }



//     let xTo = gsap.quickTo(lien, "x", {onComplete:Mouvements}),
//     yTo = gsap.quickTo(lien, "y", { });


//    gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});

//    xTo(widthMax*0.35);
//    yTo(0 - objet);
   

//   function Interieur(){ //parfait avec le scope de cp.

//     xTo(widthMax*0.35);
//     yTo(0 - objet);
    
   
//   }));

    
//     processChange = debounce(() => Interieur());


//     window.addEventListener("resize", processChange);

//     lien.addEventListener("click", (e) => {
//       // console.log("click1");



//     })


// }



// }


// function MoveInit() {
//   gsap.set(lien, {x : () => -50-objet, y : () => heightMax/5});
  
// }






//un fonction de selection qui tournerai la bonne fonction en random parmis
//celles qui restent  => pick a number = info+anim between list infos restantes (pop)
//au fur et à mesure et joue la nous. 



// function Mouv2() {

  


//   gsap.set(lien, {x : () => widthMax + objet, y : () => heightMax*0.4});



   
//    window.addEventListener("resize", debounce(function(e){
//     console.log("debounce");

//     xTo(widthMax*0.35);
//     yTo(0 - objet);
    
//   }));


//   xTo(widthMax*0.35);
//   yTo(0 - objet);


//    lien.addEventListener("click", (e) => {
//       console.log("click2");

      

//     })




// } 



// function Mouv3() {

//   gsap.set(lien, {x : () => widthMax*0.87, y : () => 0-objet});


//   // window.addEventListener("resize", debounce(function(e){
//   //   console.log("debounce");


//   //   xTo(widthMax*0.25);
//   //   yTo(heightMax + objet);
    
//   // }));


//   xTo(widthMax*0.25);
//   yTo(heightMax + objet); //j'aurai pu faire widthMax * 0.5 pour aller de moitié


// } 












//quickto et set => ça sera bon. 5 animations différentes à jouer à l'infini.

 // let master = gsap.timeline({defaut : repeat-1}) //à réécrire injection et hover.

}

export default Lien ;