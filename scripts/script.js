const Script = () =>  {

function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,300,event);
  };
}

//SETUP DE DE LA SOURIS 
let ball = document.querySelector(".ball");
let cpst = document.querySelector(".cpt");


let Ball = {
 c : [],
 x : [],
 y: []
  
 };

let thisBall = document.querySelector(".ball");

gsap.set(ball, {xPercent: -50, yPercent: -50}); //centré


// gsap.set(thisBall, {xPercent: -50, yPercent: -50}); //position de base retirée pour ne garder que translate 3D

window.addEventListener("mousemove", e => {


  
  let xTo = gsap.to(thisBall, {
  duration: 1.2, 
  ease: "power4",
  x : () => e.pageX,
  y : () => e.pageY
 
  });

});







//ELEMENTS
let cpt = gsap.utils.toArray(".cpt");

//attribut en array avec i !

let tempsChacun = [1, 1.2];
let rotChacun = [0,0];
let forceChacun = [1, 1];

let centrageX = [22.5, 28]; //pour moi ou est le centre,
let centrageY = [22.5, 28]; //ou operation en fct° des éléments

cpt.forEach (function(cp, i) {
  
  let y, x, a, b;
  var rect ;
  
  let demiWidth = centrageX[i];
  let demiHeight = centrageY[i];
  
  let values = false;
  let reverse = false ;
  let playOnce = false;

  let dure = tempsChacun[i];
  let degre = rotChacun[i];
  let force = forceChacun[i];


  let lignesH = document.querySelector("#lignesInitialesHorizontale" + i);
  let lignesV = document.querySelector("#lignesInitiales" + i);

  let interieur = document.querySelector("#cibleinterieur" + i);
  console.log(interieur);
  
  let play;

  rect = cp.getBoundingClientRect();

  window.addEventListener("resize", debounce(function(e){ //parfait avec le scope de cp.

     rect = cp.getBoundingClientRect();
    
  }));
 




  


  gsap.set(".cpt", {transformOrigin: "center"});
  window.addEventListener("mousemove", (e) => {
          a = e.pageY;
          b = e.pageX;
          // rect = cp.getBoundingClientRect();


  });
  
   //coordonnes de <circle ici> en haut à gauche
  cp.addEventListener("mouseenter", function(e) {

    console.log("CP")
    
      if (values==false) { //on pioche dans l'event qui traque la souris a et b y et x
      x = b ;
      y = a  ;
    
      values = true; //prendre juste une fois
        
      }

  console.log(rect.x, rect.y);

    

      // console.log(rect.x)
    x -= rect.x;
    y -= rect.y;
    x -= demiWidth; //prendre en compte le radius
    y -= demiHeight; //détection x et y très bien mais le x-y top left même avec une bonne origine
    x *= force; //ça marche, avec l'origine on peut voir la distance se creser
    y *= force;
 

    var rotation = (x*degre + y*degre)/2 ;

    if (reverse == false && playOnce == false) {
    play = gsap.timeline();
    play.to([lignesH, lignesV], {opacity : 1, scale : 1}) ; 
    play.to(cp, {y : y*-1, x :  x*-1, duration : dure, rotation : rotation, ease:"power3.inOut", onComplete: come} , "<" ); //plus tard rotation distribute si possible ou varié.
      play.to(thisBall, {scale:1.2, duration : dure/2, ease:"power1.Out"}, "<" )
    // play.to([thisBall, cp], {scale:0.8, duration : dure/3, ease:"power4.Out"}, 1)
    // console.log("animation->forward  " + reverse);   
    playOnce = true; //joue parfois deux fois d'affiler donc double précaution
    }

  
})

function come() {
              
              play.reverse();
              reverse = true; 
              let calculeTempsTouche = play.duration()*0.8*1000;//1 *0.8 de celui-ci et on multiplie le tout en milliseconde => 1000 = 1 seconde //0.8 à changer avec le ease en testant
              setTimeout(()=> {
                 values = false; //rafraichir les valeurs possibles => un nouveau gsap.to --ok
              reverse = false;
              gsap.to(interieur, {scale :1, onComplete:Image});
                console.log(cp);
                // console.log("replayPossible");
                playOnce = false;
            }, calculeTempsTouche) //déjà en place à 800 au lieu d'une timeline complete a 1000 grace a la duration et au easing
            

}

function Image() {
  cp.setAttribute("src", "images/ROND_hover" + i + ".png");
  gsap.to(interieur, {opacity :0});
  gsap.to([lignesH, lignesV], {opacity : 0}) ; //securite du touche


}


});

//long a cote de moins longs pour les animations diverses



}

export default Script ;