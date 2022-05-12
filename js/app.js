// ton code ici
// objet app
var app = {
  'headerForm': document.getElementById('header-form'),
  'gridInput': document.createElement('input'),
  'pixelInput': document.createElement('input'),
  'formButton': document.createElement('button'),
  'colorPicker': document.getElementById('colorPicker'),
  'pickedColor': 'empty',
  'styles': [
    'white',
    'light-grey',
    'dark-grey',
    'black',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
  ],

  init() {
    // recupérer le form et construire dedans les input et le bouton
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

    //construire le color picker
    for (var index = 0; index < app.styles.length; index++) {
      var btn = document.createElement('button');
      btn.classList.add('color-button');
      btn.id = app.styles[index];
      app.colorPicker.appendChild(btn);
    }
    var defaultBtn = document.getElementById('empty');
    defaultBtn.classList.add('active');
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
        newCell.classList.add("empty");
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
  clickedCell.removeAttribute('class');
  clickedCell.classList.add(app.pickedColor);
})

// event sur clic button qui récupère value des input
app.formButton.addEventListener('click', function (event) {
  app.resetBoard();
  console.log(app.pixelInput.value);
  app.buildBoard(app.gridInput.value, app.pixelInput.value);
})

// clic sur colorPicker
app.colorPicker.addEventListener('click', function (event) {
  var clickedBtn = document.getElementById(event.target.id);
  var clickedBtnId = clickedBtn.id;
  var allBtn = document.getElementsByClassName('color-button');

  //console.log(allBtn);
  for (var index = 0; index < allBtn.length; index++) {
    allBtn[index].classList.remove('active');
  }
  clickedBtn.classList.add('active');
  app.pickedColor = clickedBtnId;
})

app.init();