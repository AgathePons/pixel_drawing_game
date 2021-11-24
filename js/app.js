// ton code ici
// objet app
var app = {
    'headerForm': document.getElementById('header-form'),
    'gridInput': document.createElement('input'),
    'pixelInput': document.createElement('input'),
    'formButton': document.createElement('button'),

    init() {
        // recupérer le form et construire dedans les input et le bouton
        console.log(app.headerForm);
        //construire les input
        app.gridInput.id = 'grid-input';
        app.gridInput.setAttribute('type', 'number');
        app.gridInput.setAttribute('placeholder', 'Taille de la grille');
        app.headerForm.appendChild(app.gridInput);

        app.pixelInput.id = 'pixel-input';
        app.pixelInput.setAttribute('type', 'number');
        app.pixelInput.setAttribute('placeholder', 'Taille des pixels');
        console.log(app.pixelInput);
        app.headerForm.appendChild(app.pixelInput);

        //construire le bouton
        app.formButton.id = "form-button";
        app.formButton.setAttribute('type', 'button');
        app.formButton.textContent = 'Valider';
        app.headerForm.appendChild(app.formButton);
    },
    buildBoard(numberBoard, pixelSize) {
        //Création du Tableau
        var pixelBoard = document.getElementById("pixelBoard");
        // on construit x lignes en fonction de numberBoard 
        for (let index = 0; index < numberBoard; index++) {
            var newLine = document.createElement("tr");
            var idLine = index;
            newLine.classList.add("boardLine");
            newLine.id = index;
            pixelBoard.appendChild(newLine);
            // on construit x cellule en fonction de numberBoard
            for (let index = 0; index < numberBoard; index++) {
                var newCell = document.createElement('td');
                newCell.classList.add("boardCell");
                newCell.classList.add("black");
                newCell.id = `line-${idLine}-cell-${index}`;
                newLine.appendChild(newCell);
                newCell.style.height = `${pixelSize}px`;
                newCell.style.width = `${pixelSize}px`;
            }
        }
    },
    resetBoard() {
        var board = document.getElementById('pixelBoard');
        board.innerHTML = "";
    },

};

pixelBoard.addEventListener('click', function (event) {
    var clickedCell = document.getElementById(event.target.id);
    //console.log(clickedCell);
    if (clickedCell.classList.contains('black')) {
        clickedCell.classList.replace('black', 'white');
    } else {
        clickedCell.classList.replace('white', 'black');
    }
})

// event sur clic button qui récupère value des input
app.formButton.addEventListener('click', function (event) {
    app.resetBoard();
    console.log(app.pixelInput.value);
    app.buildBoard(app.gridInput.value, app.pixelInput.value);
})

app.init();