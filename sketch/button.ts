class Button{
  value: string;
  posX: number;
  posY: number;

  constructor(value:string,posX:number,posY:number){
    this.value = value;

    this.posX = posX;
    this.posY = posY;


    let button = createButton(`---${this.value}---`);
    button.style("background-color", "#ff0000")
    button.style("color", "#ffffff")
    button.position(this.posX, this.posY);
    button.mousePressed(() => {console.log('hola')});
  }

  draw():void{
    
  }
}