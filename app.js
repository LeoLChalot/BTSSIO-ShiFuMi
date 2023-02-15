const arrayOrdi = ["pierre", "feuille", "ciseaux"];
const resultat = document.getElementById("resultat");
const displayJoueur = document.getElementById("choix-joueur");
const displayOrdi = document.getElementById("choix-ordi");
let scoreJoueur = 0;
let scoreOrdi = 0;
let gagnant = document.getElementById("gagnant");
const btnJouer = document.getElementById("btn-jouer");
const choix = document.getElementById("choix");
let choixJoueur;
let choixOrdi = ordiRandom();

choix.addEventListener("click", joueurChoix);
btnJouer.addEventListener("click", resultatManche);

function erase(element1, element2, element3) {
	if ((typeof element2 == 'undefined') && (typeof element3 == 'undefined')) {
		setTimeout(() => {
			element1.textContent = "";
		}, 2000);
	} else {
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
}
function ordiRandom() {
	return arrayOrdi[Math.floor(Math.random() * arrayOrdi.length)];
}
function joueurChoix(event) {
	let target = event.target.className;
	displayJoueur.textContent = target;
	choixJoueur = target;
	displayOrdi.textContent = "";
}
function resultatManche() {
	displayOrdi.textContent = choixOrdi;
	if (choixJoueur == undefined) {
		console.error("Pas de choix");
	} else {
		if (
			(choixOrdi == "pierre" && choixJoueur == "pierre") ||
			(choixOrdi == "feuille" && choixJoueur == "feuille") ||
			(choixOrdi == "ciseaux" && choixJoueur == "ciseaux")
		) {
			resultat.style["color"] = "black";
			resultat.textContent = "Egalité";
		} else if (
			(choixOrdi == "pierre" && choixJoueur == "feuille") ||
			(choixOrdi == "feuille" && choixJoueur == "ciseaux") ||
			(choixOrdi == "ciseaux" && choixJoueur == "pierre")
		) {
			resultat.style["color"] = "green";
			resultat.textContent = "Gagné !";
			scoreJoueur++;
		} else if (
			(choixOrdi == "pierre" && choixJoueur == "ciseaux") ||
			(choixOrdi == "feuille" && choixJoueur == "pierre") ||
			(choixOrdi == "ciseaux" && choixJoueur == "feuille")
		) {
			resultat.style["color"] = "red";
			resultat.textContent = "Perdu !";
			scoreOrdi++;
		}
		erase(resultat, displayOrdi, displayJoueur);

		if (scoreJoueur == 5) {
			gagnant.textContent = "Le joueur à gagné !";
			scoreOrdi = 0;
			scoreJoueur = 0;
		} else if (scoreOrdi == 5) {
			gagnant.textContent = "L'ordi à gagné !";
			scoreOrdi = 0;
			scoreJoueur = 0;
		}

		setTimeout(erase(gagnant), 5000);
		document.getElementById("score-joueur").textContent = scoreJoueur;
		document.getElementById("score-ordi").textContent = scoreOrdi;
	}
}
