// ton code ici

function buildBoard(numberBoard) {
    //Création du Tableau
    var pixelBoard = document.getElementById("pixelBoard");
    console.log(pixelBoard);
    // Créaction des ligne
    var newLine = document.createElement("tr");
    console.log(newLine);
    newLine.classList.add("boardLine");

    for (var index = 0; index < numberBoard; index++){
        pixelBoard.appendChild(newLine);
        console.log(index);
    }
}

