class Display{
  value: string
  result: number
  posX: number;
  posY: number;
  constructor(posX: number, posY: number){
    this.value = '';
    this.result = 0;
    this.posX = posX;
    this.posY = posY;
  }
  draw(){
    fill(118,135,177);
    rect(this.posX, this.posY, 180, 40);
    fill(0)
    text(this.value, this.posX + 10, this.posY + 25);
  }

  showResult(){
    console.log(this.value)
  }
  public get getValue(){
    return this.value;
  }
  public set setValue(newValue: string){
    this.value = newValue;
  }
  
}