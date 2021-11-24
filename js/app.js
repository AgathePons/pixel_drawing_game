// ton code ici

function buildBoard(numberBoard) {
    //Création du Tableau
    var pixelBoard = document.getElementById("pixelBoard");
    // Créaction des ligne

    // on construit x lignes en fonction de numberBoard 
    for (let index = 0; index < numberBoard; index++) {
        //
        var newLine = document.createElement("tr");
        var idLine = index;
        newLine.classList.add("boardLine");
        newLine.id = index;
        pixelBoard.appendChild(newLine);

        for (let index = 0; index < numberBoard; index++) {
            var newCell = document.createElement('td');
            newCell.classList.add("boardCell");
            newCell.classList.add("black");
            newCell.id = `line-${idLine}-cell-${index}`;
            newLine.appendChild(newCell);
        }
    }
}

function resetBoard() {
    var board = document.getElementById('pixelBoard');
    board.innerHTML = "";
}

// on addEventListener pour détecter click
// au clic on replace la class de la td si c'est blc > noir et inversement
var boardCell = document.getElementsByClassName('boardCell');
var invaderDiv = document.getElementById('pixelBoard');
var arrayBoardCell = document.getElementsByClassName('boardCell');

pixelBoard.addEventListener('click', function (event) {
    var clickedCell = document.getElementById(event.target.id);
    //console.log(clickedCell);
    if (clickedCell.classList.contains('black')) {
        clickedCell.classList.replace('black', 'white');
    } else {
        clickedCell.classList.replace('white', 'black');
    }
})

// recupérer le form et construire dedans les input et le bouton
var headerForm = document.getElementById('header-form');
console.log(headerForm);
//construire les input
var gridInput = document.createElement('input');
gridInput.id = 'grid-input';
gridInput.setAttribute('type', 'number');
gridInput.setAttribute('placeholder', 'Taille de la grille');
headerForm.appendChild(gridInput);

var pixelInput = document.createElement('input');
pixelInput.id = 'pixel-input';
pixelInput.setAttribute('type', 'number');
pixelInput.setAttribute('placeholder', 'Taille des pixels');
console.log(pixelInput);
headerForm.appendChild(pixelInput);

//construire le bouton
var formButton = document.createElement('button');
formButton.id = "form-button";
formButton.setAttribute('type', 'button');
formButton.textContent = 'Valider';
headerForm.appendChild(formButton);

// event sur clic button qui récupère value des input
formButton.addEventListener('click', function (event) {
    resetBoard();
    console.log(gridInput.value);
    buildBoard(gridInput.value);
})