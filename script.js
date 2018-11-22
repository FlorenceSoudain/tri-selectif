var dechets = [];

var poubelleJ = document.getElementById('jaune');
var poubelleB = document.getElementById('bleu');
var poubelleV = document.getElementById('vert');
var poubelleM = document.getElementById('marron');


var bouteillesPlastiques = new Image();
bouteillesPlastiques.src = 'images/bouteilles-plastiques.jpg';
dechets.push(bouteillesPlastiques);
bouteillesPlastiques.className = "dechets";
bouteillesPlastiques.id = "bouteillePlastiques";
document.getElementById('dechets').appendChild(bouteillesPlastiques);
bouteillesPlastiques.alt = "Bouteilles en plastiques";

var bouteillesLait = new Image();
bouteillesLait.src = 'images/bouteilles-lait.jpg';
dechets.push(bouteillesLait);
bouteillesLait.className = "dechets";
document.getElementById('dechets').appendChild(bouteillesLait);
bouteillesLait.alt = "Bouteille de lait";

var bouteillesVerres = new Image();
bouteillesVerres.src = 'images/bouteilles-verres.jpg';
dechets.push(bouteillesVerres);
bouteillesVerres.className = "dechets";
document.getElementById('dechets').appendChild(bouteillesVerres);
bouteillesVerres.alt = "Bouteilles en Verres";

var canette = new Image();
canette.src = 'images/canette.jpg';
dechets.push(canette);
canette.className = "dechets";
document.getElementById('dechets').appendChild(canette);
canette.alt = "Canette";

var magazines = new Image();
magazines.src = 'images/magazines.jpg';
dechets.push(magazines);
magazines.className = "dechets";
document.getElementById('dechets').appendChild(magazines);
magazines.alt = "Une pile de magazines";

var journaux = new Image();
journaux.src = 'images/journaux.jpg';
dechets.push(journaux);
journaux.className = "dechets";
document.getElementById('dechets').appendChild(journaux);
journaux.alt = "Une pile de journaux";



console.log(dechets.length);
for (i = 0; i < dechets.length; i++) {
    console.log(dechets[i]);
}