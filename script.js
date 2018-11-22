var dechets = [];

var poubelleJ = document.getElementById('jaune');
var poubelleB = document.getElementById('bleu');
var poubelleV = document.getElementById('vert');
var poubelleM = document.getElementById('marron');


var bouteillesPlastiques = new Image();
bouteillesPlastiques.src = 'images/bouteilles-plastiques.jpg';
dechets.push(bouteillesPlastiques);
bouteillesPlastiques.className = "jaune";
bouteillesPlastiques.id = "bouteillePlastiques";
bouteillesPlastiques.alt = "Bouteilles en plastiques";

var bouteillesLait = new Image();
bouteillesLait.src = 'images/bouteilles-lait.jpg';
dechets.push(bouteillesLait);
bouteillesLait.className = "jaune";
bouteillesLait.alt = "Bouteille de lait";

var bouteillesVerres = new Image();
bouteillesVerres.src = 'images/bouteilles-verres.jpg';
dechets.push(bouteillesVerres);
bouteillesVerres.className = "vert";
bouteillesVerres.alt = "Bouteilles en Verres";

var canette = new Image();
canette.src = 'images/canette.jpg';
dechets.push(canette);
canette.className = "jaune";
canette.alt = "Canette";

var magazines = new Image();
magazines.src = 'images/magazines.jpg';
dechets.push(magazines);
magazines.className = "bleu";
magazines.alt = "Une pile de magazines";

var journaux = new Image();
journaux.src = 'images/journaux.jpg';
dechets.push(journaux);
journaux.className = "bleu";
journaux.alt = "Une pile de journaux";

document.getElementById("jouer").addEventListener("click", function (){

    displayImage();
});

document.getElementById('jaune').addEventListener('click', function () {
    if(random == document.getElementsByClassName('jaune')){
        alert('bravo');
    }
});
function displayImage() {
    var num = Math.floor(Math.random() * (dechets.length+1));
    document.getElementById("dechet").innerHTML = '<img'+ dechets[num];

}

console.log(dechets.length);
for (i = 0; i < dechets.length; i++) {
    console.log(dechets[i]);
}