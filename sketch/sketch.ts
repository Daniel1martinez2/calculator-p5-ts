//Here we declare the variables
let calculators: Calculator[];

function setup() {
  //Here we initialize the variables
  createCanvas(windowWidth, windowHeight);
  calculators = [
    new Calculator(0,50),
    new Calculator(200,50),
    new Calculator(400,50),
  ];
}

function draw() {
  background(255);
  calculators.forEach(cal => cal.draw())
}
