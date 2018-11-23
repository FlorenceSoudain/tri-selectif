var dechets = [];

var poisson = new Image();
poisson.src = 'images/0.jpg';
dechets.push(poisson);
poisson.className = "marron";
poisson.id = "poisson";
poisson.alt = "Arrêtes de poisson";

var bouteillesPlastiques = new Image();
bouteillesPlastiques.src = 'images/1.jpg';
dechets.push(bouteillesPlastiques);
bouteillesPlastiques.className = "jaune";
bouteillesPlastiques.id = "bouteillePlastiques";
bouteillesPlastiques.alt = "Bouteilles en plastiques";

var bouteillesLait = new Image();
bouteillesLait.src = 'images/2.jpg';
dechets.push(bouteillesLait);
bouteillesLait.className = "jaune";
bouteillesLait.alt = "Bouteille de lait";

var bouteillesVerres = new Image();
bouteillesVerres.src = 'images/3.jpg';
dechets.push(bouteillesVerres);
bouteillesVerres.className = "vert";
bouteillesVerres.alt = "Bouteilles en Verres";

var canette = new Image();
canette.src = 'images/4.jpg';
dechets.push(canette);
canette.className = "jaune";
canette.alt = "Canette";

var magazines = new Image();
magazines.src = 'images/5.jpg';
dechets.push(magazines);
magazines.className = "bleu";
magazines.alt = "Une pile de magazines";

var journaux = new Image();
journaux.src = 'images/6.jpg';
dechets.push(journaux);
journaux.className = "bleu";
journaux.alt = "Une pile de journaux";

var random;
var score = 10;

function aleatoire() {
    random = Math.round(Math.random() * 6);
    console.log(random);
    document.getElementById('dechets').innerHTML = ('<img src="images/' + random + '.jpg" />');


    switch (random) {
        case 0:
            document.getElementById('marron').addEventListener('click', function () {
                console.log('bravo');
                score--;
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 1:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('bravo');
                score--;
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 2:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('bravo');
                score--;
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 3:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('bravo');
                score--;
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 4:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('bravo');
                score--;
                console.log(score);
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 5:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('bravo');
                score--;
                console.log(score);
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
        case 6:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('bleu').addEventListener('click', function () {
                console.log('bravo');
                score--;
                console.log(score);
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;

    }
    for (j = 0; j < score.length; j++) {


        if (score == 0) {
            document.getElementById('jeu').style.display = 'none';
            document.getElementById('resultats').style.display = 'block';
            document.getElementById('resultats').innerHTML = 'Vous avez gagné !' + score[i];
            console.log(score);
        }
    }
}

document.getElementById("jouer").addEventListener("click", function () {
    aleatoire();

});

document.getElementById('resultats').style.display = 'none';

console.log(dechets.length);
for (i = 0; i < dechets.length; i++) {
    console.log(dechets[i]);
}
