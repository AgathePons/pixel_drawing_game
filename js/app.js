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
        console.log(index);

        for (let index = 0; index < numberBoard; index++) {
            var newCell = document.createElement('td');
            newCell.classList.add("boardCell");
            newCell.classList.add("black");
            newCell.id = `line-${idLine}-cell-${index}`;
            newLine.appendChild(newCell);
        }
    }
}

buildBoard(8);

// on addEventListener pour détecter click
// au clic on replace la class de la td si c'est blc > noir et inversement
var boardCell = document.getElementsByClassName('boardCell');

const onClick = (event) => {
    console.log(event.target.id);
    var clickedCell = document.getElementById(event.target.id);
    var classCell = clickedCell.className;
    console.log(classCell);
    
    if (clickedCell.classList.contains('black')) {
        clickedCell.classList.replace('black', 'white');
    } else {
        clickedCell.classList.replace('white', 'black');
    }
    
  }
  window.addEventListener('click', onClick);