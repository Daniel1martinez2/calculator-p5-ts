class Calculator {
  posX: number;
  posY: number;
  buttonsValues:string[];
  buttons: Button[];
  display: Display;
  constructor(posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
    this.buttonsValues = [
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '/', '='
    ];
    this.buttons = [];
    this.display = new Display(this.posX, this.posY);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const currentValue = this.buttonsValues[j + (i*4)];
        if(this.buttonsValues[j + (i*4)] === '='){
          this.buttons.push(new EqualKey(this.display, currentValue, (j * 50) + this.posX, (i* 50) + this.posY + 50));
        }else{
          this.buttons.push(new NumberKey(this.display, currentValue, (j * 50) + this.posX, (i* 50) + this.posY + 50))
        }
      }
    }
  }

  public draw(){
    fill(45, 50, 58);
    rect(this.posX, this.posY, 180, 220);
    this.display.draw();
  }
}