import barba from '@barba/core';
import Hover from "/scripts/hover.js";
import HoverQuestion from "/scripts/hover-questions.js";
import LienHaut from "/scripts/lienHaut.js";
import Script from "/scripts/script.js";

//ici, non :
// let select = e => current.container.querySelector(e);
// let selectAll = e => current.container.querySelectorAll(e);

//XXXXXXXXX

// var link = document.createElement('a');
// link.className = 'divLink';
// link.setAttribute("href", "question.html");
// section.appendChild(link);

// var tr = document.createElement('div');
// tr.className = 'transition';

// section.appendChild(tr); // non, c'est juste la succession avec current et next => query, pas de select()



let x ;
let y ;

window.addEventListener("mousemove", e => {	 
		  // console.log(fin); CONSOLE MARCHE.

		  x = e.pageX;
		  y = e.pageY;

});


let defilement = (container) => {
	

const row = document.querySelector(".cb-tagreel-row");

	let row_width = row.getBoundingClientRect().width;
	let row_item_width = row.children[0].getBoundingClientRect().width;

	let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
	let x_translation = initial_offset * -1;
	// console.log(e.children[0].clientWidth);
	console.log(x_translation);

	gsap.set(row, {
		xPercent: `${initial_offset}`
	});

	let duration = 4;

	var tl = gsap.timeline();

	tl.to(row, {
		ease: "none",
		duration: duration,
		xPercent: 0,
		repeat: -1
	});





}


let runScript = (container) => { //peut etre passer next dans les parametre la prochaine fois, pas avoir a refresh avant Timeout

	//ou peut etre une promesse solve a la fin de la foncion si le scope le permet. 
	let fin = container.querySelector("#transition");


	let xTo = gsap.quickTo(fin, "x", {duration: 0.8, ease: "power1.easeIn"});
	let yTo = gsap.quickTo(fin, "y", {duration: 0.8, ease: "power1.easeIn"});

		window.addEventListener("mousemove", e => {
		  xTo(e.pageX);
		  yTo(e.pageY);
		  // console.log(fin); CONSOLE MARCHE.

		  x = e.pageX;
		  y = e.pageY;

		});



const colonne = container.querySelector(".gaucheqst");
					


	let tl = gsap.timeline();
	tl.set(colonne, {xPercent:-100}, 0);
	tl.fromTo(fin, {x : x, y: y, scale : window.innerWidth/6}, { scale : 0, duration:1.4, ease:"power1.easeIn"}); //mouse=>overlay
	// tl.to(fin, {scale : 0, duration:0.3, ease:"power4.easeIn"})
	tl.from(colonne, {xPercent:-100, ease:"power3.easeOut", duration:1}, 0.75);//
	
	// console.log(tl)


}




barba.init({
	transitions : [
		{
			name :"pageAccueil",

			beforeOnce({next}) {
			
			},

			once({current, next, trigger}) {

				let cpst = next.container.querySelector(".composant");
				let titre = next.container.querySelector("#premierTitre");
				let arc = next.container.querySelector("h2");
				let sousTitre = next.container.querySelector(".sous-titres");
				let headers = next.container.querySelectorAll("header");
		




				const Intro = () => {

				return new Promise(resolve => {

					

					const tl = gsap.timeline({
						onComplete() {
							defilement(next.container);
							Script();
							Hover(); //joue pour la première page
							

							resolve()						
						},
						defaults : {
							ease:"power3.easeOut"
						}
					});


					tl.to(cpst, {yPercent : 0, opacity : 1, duration:1.3});
					tl.to(headers, {yPercent : 0, opacity : 1, duration:0.7}, 0.1);
					
					




				})

			}

				return new Promise(resolve => {
					const introIntro = gsap.timeline({
						onComplete() {
							Intro();
							
							resolve();					
						},
						defaults : {
							ease:"power4.easeOut"
						}
					});


					
	/*				let rideauD = next.container.querySelector("#fondDroit");
					let rideauG = next.container.querySelector("#fondGauche");*/

					introIntro.set(cpst, {yPercent : -85, opacity : 0}, 0);
					introIntro.set(titre, {scale: 0}, 0);
					introIntro.set(arc, {scale: 0}, 0);
					introIntro.set(sousTitre, {transformOrigin : "center", scale: 0}, 0);
					introIntro.set(headers, {opacity : 0}, 0);
			

		
					
		/*animationTitre*/

					introIntro.to(titre, {scale: 1, duration:0.7}, 0.1);
					introIntro.to(arc, {scale: 1, duration:0.7}, 0.2);
					introIntro.to(sousTitre, {transformOrigin : "center", scale: 1, duration:0.7}, 0.4);
			


				})


				



			},

			leave({current, next, trigger}) {
				return new Promise(resolve => {
					const tl = gsap.timeline({
						onComplete() {
							current.container.remove()
							resolve()							
						}
						
					});

					
					// let cpst = current.container.querySelector(".composant");
					// tl.to(cpst, {yPercent : 0, duration:1.3});


					const tr = current.container.querySelector("#transition");	
				

					tl.fromTo(tr, {x : x, y : y, scale : 0}, {x : x, y : y, scale : window.innerWidth/6, duration:2});
					



				})

			},

			enter({current, next}) { //au depart, before enter mais en vrai enter fait le taf
				
				//pas de Promise return car c'est le dernier bout de la liste de Hooks sinon setTimout ou tl complete()
				// runScript(next.container); //next.container accessible pour performer une bete d'animation event !!
				//  // gsap est intgre dedans, voila pourquoi c'est enter ! tout y est, set et from => texte.
				// barba.destroy(); // pour arreter l'animation, ce barba qui resterai sur la nouvelle page en sortie seulement,
				// // après l'entrée, runscript.
				

			}

		}
			
	],
	views : [

	{
		namespace: 'question',
		    beforeEnter({next}) {
		    	
		    	runScript(next.container); //avant d'entrer sur l'autre page, fait l'animation d'entrer
				

		      // update the menu based on user navigation 
		    
		      

		    },
		    afterEnter() {
		      // refresh the parallax based on new page content
		    LienHaut(); //après l'entrée, on lance le vrai script de la future page CA MARCHE DE OUF
		    HoverQuestion();
		    barba.destroy(); //on détruit nos restes.

		     
		    }
	 }

		],
	debug : true,
	logLevel: 'debug', //toute les infos de debug
	logLevel: 'error',
	logLevel: 'info',
	logLevel: 'warning'


})

