//Here we declare the variables
const buttonsValues:string[] = [
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '/', '='
]

const buttons: Button[] = [];


function setup() {
  //Here we initialize the variables
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      buttons.push(new Button(buttonsValues[j + (i*4)], j * 50, i* 50))
    }
    
  }
}

function draw() {
  background(255, 0, 255);
}