//SCROLL SUR LE COTE, CONTENU MODERE POUR 3 SECTIONS => 1 TITRE ET UNE DIV VOIR 
//LE TEST FINAL ET RETWEAKER LE CONTENU

const Reponse = () =>  {
	
gsap.registerPlugin(MotionPathPlugin); //ne pas oublier
	function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,300,event);
  };
}


let element = document.querySelector("#texteScroll");


let longueur =  element.clientHeight;
let section = 3;
let minHeight = element.clientHeight/section;


let parcours = 0 ;
let avance = 1 ;
let trace = 0 ;




function Aptitude() {

	window.addEventListener("resize", debounce(function(e){

		let longueur =  element.clientHeight;
		let section = 3;
		let minHeight = element.clientHeight/section;


		let parcours = 0;
		let avance = 0 ;




		console.log("minHeight" + minHeight)

	}));


	let sectionTrace = 2

	let scroll = gsap.to(element, {y: parcours,  ease:"power2.inOut", duration:0.3, paused:true} );  //valeurs locales
	let scrollArriere = gsap.to(element, {y: parcours, ease:"power2.inOut", duration:0.3, paused:true}); 


	$(".scrollContenu").on('wheel', function(e) { //solution ultime pour repérer la direction du wheel de maniere accurate
	  if (e.originalEvent.deltaY < 0) {
	    console.log("Scroll up"); //j'ai inverse les animations avec le veritable resultat
	    	if(parcours > (-(longueur) + minHeight)) {
	    		gsap.to(element, {y: () => parcours -= minHeight,  ease:"power2.inOut", duration:0.3} );
	    		gsap.to("#herman", { duration:0.3, ease:"none",
					  motionPath:{
					    path:"#motionpath",
					    align:"#motionpath",
					    alignOrigin:[0.5,0.5],
					    transformOrigin: "center",
					    start: trace,
    					end: () => trace += (100/sectionTrace *0.01), //pour etre inferier à 1 => 1.3


					  }
				});
			
				// console.log("parcours" + parcours)
				// console.log("longueur" + longueur)
				// console.log("match")
				console.log(trace)
	    	} 						
	    
	  } else {
	  	console.log("Scroll down");
	  		if(parcours < (-section)) { //trouver une logique pour le nombre de sections
	    		gsap.to(element, {y: () => parcours += minHeight,  ease:"power2.inOut", duration:0.3} );
	    		gsap.to("#herman", { duration:0.3, ease:"none",
					  motionPath:{
					    path:"#motionpath",
					    align:"#motionpath",
					    alignOrigin:[0.5,0.5],
					    transformOrigin: "center",
					    start: trace,
    					end: () => trace -= (100/sectionTrace *0.01), 


					  }
				});
			
			
				// console.log("parcours" + parcours)
				// console.log("longueur" + longueur)
				console.log("avance" + avance)

				console.log("parcours" + parcours)
				console.log("longueur" + longueur)
				console.log("match")
	    	} 
	  
	   
	  }

	});





}


Aptitude();


}


export default Reponse ;