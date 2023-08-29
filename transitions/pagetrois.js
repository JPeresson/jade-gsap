// 

					// let colonneg = next.container.querySelectorAll("h2, .poursuivre");
					// let colonned = next.container.querySelector(".resultatDet");

					// tl.set(rep, {y:"50%"});
					// tl.set(colonneg, {yPercent : 200});
					// tl.set(colonned, {yPercent : 200});


import barba from '@barba/core' ;



barba.init({
	transitions : [
		{	
			name:"reponse",
			once({current, next, trigger}) {
				return new Promise(resolve => {
					
					const rep = next.container.querySelector("h1") ;

					const tl = gsap.timeline({
						onComplete() {
							rep.classList.remove("fixed")
							resolve()

						}

					});

					
					tl.to(rep, {scale: 1, duration:1});




				})

			},
			afterOnce({current, next, trigger}) {


				return new Promise (resolve => {
					const tl = gsap.timeline({
						onComplete() {
						resolve()

						}

					});

					const colonneg = next.container.querySelectorAll("h2, .poursuivre");
					// let colonned = next.container.querySelector(".resultatDet");

					tl.to(colonneg, {yPercent : 0, duration:0.2}, 0);
					// tl.to(colonned, {yPercent : 0, duration:0.3}, 2);



				})

				
			}


		}

	],
	
	views : [],
	debug : true
}) 
