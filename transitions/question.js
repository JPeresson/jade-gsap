import barba from '@barba/core' ;
import Reponse from "/scripts/reponse.js";
import LienHaut from "/scripts/lienHaut.js";
import HoverQuestion from "/scripts/hover-questions.js";
// HTML SERT A RIEN POUR ACTIVER LES SCRIPTS


barba.init({
	transitions : [
		{	
			name:"question",
			once({next}) {
		//joue une fois sur la page toujours meme avec after leave dans view
				LienHaut();
				HoverQuestion();
		    	barba.destroy(); //il faut detruire des qu'il n'y a plus rien a faire.

			},

			leave({current}) {
				current.container.remove(); //je ne sais pas si ça fonctionne mais je mets la au cas ou (je pense pas)
			}



		}

	],
	
	views : [],
	debug : true
}) 
