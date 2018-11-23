var dechets = [];

var poubelleJ = document.getElementsByClassName('jaune');
var poubelleB = document.getElementById('bleu');
var poubelleV = document.getElementById('vert');
var poubelleM = document.getElementById('marron');


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
var score = 0;

function aleatoire() {
    random = Math.round((Math.random() * 5) + 1);
    console.log(random);
    document.getElementById('dechets').innerHTML = ('<img src="images/' + random + '.jpg" />');

    switch (random) {
        case 1:
            document.getElementById('jaune').addEventListener('click', function () {
                console.log('bravo');
                score = score + 1;
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
                score = score + 1;
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
                score = score + 1;
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
                score = score + 1;
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
                score = score + 1;
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
                score = score + 1;
            });
            document.getElementById('vert').addEventListener('click', function () {
                console.log('rater');
            });
            document.getElementById('marron').addEventListener('click', function () {
                console.log('rater');
            });
            break;
    }


}

document.getElementById("jouer").addEventListener("click", function () {
    aleatoire();

});

if(score == 3)
{
    alert('fin');
}

console.log(dechets.length);
for (i = 0; i < dechets.length; i++) {
    console.log(dechets[i]);
}
console.log(score);