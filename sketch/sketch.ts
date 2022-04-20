//Here we declare the variables
let myCalculator: Calculator;

function setup() {
  //Here we initialize the variables
  createCanvas(windowWidth, windowHeight);
  myCalculator = new Calculator(100,100);
}

function draw() {
  background(255);
  myCalculator.draw();
}