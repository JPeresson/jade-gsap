import barba from '@barba/core' ;
import Reponse from "/scripts/reponse.js";


barba.init({
	transitions : [
		{	
			name:"reponse",
			
			once({current, next, trigger}) {

				return new Promise (resolve => {
					const tl = gsap.timeline({
						onComplete() {
						Reponse();
						barba.destroy(); //barba destroy apres once pour que ca marche bien, rien en leave veritablement
						resolve(); //curernt.container.remove() est deja fait naturellement, c'est juste pour vérifier.


						}


					});

					let temps = 0.7;

					let img = next.container.querySelector(".imgtr") ; //on a utilise uniquement to, pas from, 
					//la page de base, avant anim pour ne pas avoir d'erreurs, noter les positions
				
					let rep = next.container.querySelector("h1 span") ;
					let colonneg = next.container.querySelectorAll("h2, .poursuivre");
					let colonned = next.container.querySelector(".scrollContenu"); //ou colonne et l'image ailleurs
					let scroll = next.container.querySelector(".futurPath svg");

					let particules = next.container.querySelector(".explosion");

					let rectG = next.container.querySelector("#rectG");
					let pathG = next.container.querySelector("#pathG");

					let rectD = next.container.querySelector("#rectD");
					let pathD = next.container.querySelector("#pathD");

					let rectB = next.container.querySelector("#rectB");
					let pathB = next.container.querySelector("#pathB");

					
					rep.classList.remove("fixedTitre") //pas onComplete, trop tard

					tl.to(rectG, {
				  	duration: 2.2, 
				 	ease: "power4.out",
				 		motionPath:{
				    	path: pathG,
				    	align: pathG,
				    	autoRotate: 45,
				    	alignOrigin: [0.5, 0.5]
				  		}
					},0); //tous 0

					tl.to(rectD, {
				  	duration: 2.3, 
				 	ease: "power4.out",
				 		motionPath:{
				    	path: pathD,
				    	align: pathD,
				    	autoRotate: 45,
				    	alignOrigin: [0.5, 0.5]
				  		}
					},0);

					tl.to(rectB, {
				  	duration: 2.1, 
				 	ease: "power4.out",
				 		motionPath:{
				    	path: pathB,
				    	align: pathB,
				    	autoRotate: 45,
				    	alignOrigin: [0.5, 0.5]
				  		}
					},0);


					tl.to(rep, {y : 0, x :0});
					tl.to([particules, img], {y: () => (-window.innerHeight/2)*1.5, duration: temps}, "<");
					tl.to(colonneg, {y : 0, duration: temps}, "<+0.2");
					tl.to([colonned, scroll], {y : 0, duration: temps}, "<+0.4");
					

				
				});

				
			},



			leave({current}) {
				current.container.remove();
				

			}



		}

	],
	
	views : [],
	debug : true
}) 
