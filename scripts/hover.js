const Hover = () =>  {


function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,300,event);
  };
}

//IMPROVE, RAJOUTER LE WIDTH SINON TOUT EST PARFAIT OU IF MOUSEENTER NON ?


let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);


let liens = gsap.utils.toArray(".lienhover"); //permet i de forEach
console.log(liens)

let cercle = select("#background");



let x = 0; //valeur de base mais on peut aussi checker leur existence
let y = 0;

let startScale = 0.3;

let scale = [];

let hoverm = "rgb(125, 62, 60)"; 
let hoverb = "rgb(240, 165, 160)"; 
let hoverrs = "rgb(227, 112, 112)"; 
let hoverrg = "rgb(148, 18, 16)"; 

let couleurs = [hoverm, hoverb, hoverrs, hoverrg];
let opacite = [];


let debut = 27; //bonne mesure apres test xDetect et yDetect < debut console proche
let xDetect = [] ;
let yDetect = [];

let reinitialisation = 35;

let lienX = [];
let lienY = [];
let width = [];
let coor ;


let start = true ;

let entrer ;
let sortir ;
let incheck ;


let ball = select(".ball");






gsap.set(cercle, { transformOrigin:"65% 60% "}); //bien initialise car le scale est tres important avec la position
gsap.to(cercle, { scale: 0}, 0); //repris du tuto


let liensCalcules = selectAll(".lienhover");
// console.log(liensCalcules)


liensCalcules.forEach(function(lien) { //
	// console.log(lien)
		coor = lien.getBoundingClientRect();
		lienX.push(parseFloat(coor.x));
		lienY.push(parseFloat(coor.y));

		

		
		width.push(parseFloat(lien.offsetWidth)); //bien mettre dans une liste et ne pas avoir d'undefine à width[i]
		// console.log(width);
		scale.push(gsap.utils.random(15, 22));
		opacite.push(gsap.utils.random(0.6, 1));
		couleurs.push(couleurs[Math.floor(Math.random() * couleurs.length)]);
		console.log(scale[3]);



})


	window.addEventListener("resize", debounce(function(e){ //reset les donnees du dom avec length = 0

		lienX.length = 0;
		lienY.length = 0;

		width.length = 0;

		liensCalcules.forEach(function(lien) {
		

		coor = lien.getBoundingClientRect();
		lienX.push(parseFloat(coor.x));
		lienY.push(parseFloat(coor.y));


		// console.log(lienX)
		// console.log(lienY)
		// console.log(lien)
		
		width.push(parseFloat(lien.offsetWidth));
		console.log(width);



		})

		



		

	}));






liens.forEach(function(lien, i){ 

					window.addEventListener("mousemove", function(e) { 

						


					let base = gsap.set(cercle, { x: e.clientX-(0.07* e.clientX)+0.09* e.clientX, y: e.clientY+(40*4)-e.clientY*0.06, duration:1.5, ease:"power2"})
				  x = parseFloat(e.clientX);
				  y = parseFloat(e.clientY);

				 
				  		for (var a = 0; a < liensCalcules.length ; a++) {
				  			xDetect[a] = parseFloat(x) - parseFloat(lienX[a]); 
				  			yDetect[a] = parseFloat(y) - parseFloat(lienY[a]) ;

				  		}


				  	});



				

		
		
				let check ; 
				let uncheck;
						  			


				if (start) { 
					startLive();

				}


   			 function startHide(){  
   			 		console.log("startHide"); 
   			 			incheck = false ; 
				  		uncheck = setInterval (function() {
				  				

				  			if (((xDetect[i] < -reinitialisation) || (xDetect[i] > reinitialisation + width[i])  || (yDetect[i] > reinitialisation) || (yDetect[i] < -reinitialisation) || (yDetect[i] < -reinitialisation) )) { //on part a une plus grande valeur, ajustable
					  			Uncheck();
					  			
					  			
					  		}

				  	
				  		}, 55);
				 }

				 

				 function startLive(){ 
				 	console.log("startLive");
				 	
							incheck = false;
				  		check = setInterval (function() {
				  			if ((xDetect[i] > -debut) && (xDetect[i] < debut +width[i] ) &&  (yDetect[i] > -debut) && (yDetect[i] < debut )) {
				  				Check(); 
				  				console.log("true");
				  			
				  			}	  			

				  		}, 55);
				  		


				 }	

				 	function Check() { 
				 		console.log("Check"); // **
				  				stopLive();
				  				let xe;
				  				let ye;
				  				incheck = true;

				  				if (sortir) {
					  					console.log("pause de sortir")
					  					sortir.reverse().timeScale(30); ; 


					  				}


				  				let xTo = gsap.quickTo(cercle, "x", {duration: 0.4, ease: "power3"}), 
    										yTo = gsap.quickTo(cercle, "y", {duration: 0.4, ease: "power3"});

    										if (incheck) {
				    							
				    								

								  					window.addEventListener("mousemove", function(e) { 

								  						

								  							xe = e.clientX; 
															ye = e.clientY;

															xTo(xe)
										  					yTo(ye) 
										  					console.log("XY")
								  						
															
														
															
														});

														

															

											

												}

				  					entrer = gsap.timeline({})
						  					.set(cercle, {transformOrigin:"65% 60% ", opcaity : opacite[i] , backgroundColor : couleurs[i], scale: startScale, duration:1.5}, 0)
						  					.to(ball, {opacity : 0, scale: 0.7, duration:0.1}, 0.2)
						  					.to(cercle, {transformOrigin:"65% 60% ", scale: startScale*3, duration:0.4}, 0.3)
								 		//on enchaine avec precaution les elements
								 		.to(cercle, {scale: scale[i], duration:0.5});

								 		


						  				
						  					 startHide(); 
								

				 	}

				  			




				  		function Uncheck() {
				  			console.log("UnCheck"); 
									stopHide() ;


									if (entrer) { 
										console.log("pause d'entrer")
				  					entrer.reverse().timeScale(30); 
				  				}

										sortir = gsap.timeline()
							  			.to(cercle, { x : x, scale: 0, y:y, ease:"power4.inOut"},0)
							  		.to(cercle, {x: ()=> x-(0.07* x)+0.09* x, y: ()=> y+(40*4)-y*0.06, duration:0.6, ease:"power4.in"}, 0.5)
							  		.to(ball, {opacity : 1, scale: 1, duration:0.1}, 0.6);

							  		
				  		
							  		
							  		startLive();
				  			 		
				  	

				  				}


				
						  function stopHide(){


			 		
		        clearInterval(uncheck);
		        console.log(uncheck);
		    }

		     function stopLive(){
		     	clearInterval(check);

		     		start = false;
		     		 console.log(check);
		        
		    }
						  



});


}

export default Hover;
