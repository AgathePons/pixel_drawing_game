// ton code ici

function buildBoard(numberBoard) {
    //Création du Tableau
    var pixelBoard = document.getElementById("pixelBoard");
    //console.log(pixelBoard);
    // Créaction des ligne
    
    

    
    // on construit x lignes en fonction de numberBoard 
    for (let index = 0; index < numberBoard; index++) {
        //
        var newLine = document.createElement("tr");
        newLine.classList.add("boardLine");
        pixelBoard.appendChild(newLine);
        console.log(index);

        for (let index = 0; index < numberBoard; index++) {
            var newCell = document.createElement('td');
            newCell.classList.add("boardCell");
            newLine.appendChild(newCell);
        }
    }
}

buildBoard(8);