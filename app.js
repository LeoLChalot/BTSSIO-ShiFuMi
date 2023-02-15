const arrayOrdi = ["pierre", "feuille", "ciseaux"];

const resultat = document.getElementById("resultat");
const displayJoueur = document.getElementById("choix-joueur");
const displayOrdi = document.getElementById("choix-ordi");
let scoreJoueur = 0;
let scoreOrdi = 0;

const btnJouer = document.getElementById("btn-jouer");
const choix = document.getElementById("choix");
let choixJoueur;
let choixOrdi = ordiRandom();

choix.addEventListener("click", joueurChoix);
btnJouer.addEventListener("click", resultatManche);
function erase(element1, element2, element3) {
	setTimeout(() => {
		element1.textContent = "";
	}, 2000);
	setTimeout(() => {
		element2.textContent = "";
	}, 2000);
	setTimeout(() => {
		element3.textContent = "";
	}, 2000);
}
function ordiRandom() {
	return arrayOrdi[Math.floor(Math.random() * arrayOrdi.length)];
}
function joueurChoix(event) {
	let target = event.target.className;
	// console.log(target);
	displayJoueur.textContent = target;
	choixJoueur = target;
	displayOrdi.textContent = "";
}

function resultatManche() {
	displayOrdi.textContent = choixOrdi;
	console.log(choixOrdi);
	console.log(choixJoueur);
	if (choixJoueur == undefined) {
		console.error("Pas de choix");
	} else {
		if (choixOrdi == "pierre" && choixJoueur == "pierre") {
			resultat.textContent = "Egalité";
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "pierre" && choixJoueur == "feuille") {
			resultat.textContent = "Gagné !";
			scoreJoueur++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "pierre" && choixJoueur == "ciseaux") {
			resultat.textContent = "Perdu !";
			scoreOrdi++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "feuille" && choixJoueur == "pierre") {
			resultat.textContent = "Perdu !";
			scoreOrdi++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "feuille" && choixJoueur == "feuille") {
			resultat.textContent = "Egalité !";
		} else if (choixOrdi == "feuille" && choixJoueur == "ciseaux") {
			resultat.textContent = "Gagné !";
			scoreJoueur++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "ciseaux" && choixJoueur == "pierre") {
			resultat.textContent = "Gagné !";
			scoreJoueur++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "ciseaux" && choixJoueur == "feuille") {
			resultat.textContent = "Perdu !";
			scoreOrdi++;
			erase(resultat, displayOrdi, displayJoueur);
		} else if (choixOrdi == "ciseaux" && choixJoueur == "ciseaux") {
			resultat.textContent = "Egalité !";
			erase(resultat, displayOrdi, displayJoueur);
		}

		if (resultat.textContent == "Gagné !") {
			resultat.style["color"] = "green";
		} else if (resultat.textContent == "Egalité !") {
			resultat.style["color"] = "black";
		} else if (resultat.textContent == "Perdu !") {
			resultat.style["color"] = "red";
		}

		if (scoreJoueur == 5) {
			scoreOrdi = 0;
			scoreJoueur = 0;
			document.getElementById("gagnant").textContent = "Le joueur à gagné !";
			setTimeout(() => {
				document.getElementById("gagnant").textContent = "";
			}, 5000);
		}
		if (scoreOrdi == 5) {
			scoreOrdi = 0;
			scoreJoueur = 0;
			document.getElementById("gagnant").textContent = "L'ordi à gagné !";
			setTimeout(() => {
				document.getElementById("gagnant").textContent = "";
			}, 5000);
		}
		document.getElementById("score-joueur").textContent = scoreJoueur;
		document.getElementById("score-ordi").textContent = scoreOrdi;
	}
}
