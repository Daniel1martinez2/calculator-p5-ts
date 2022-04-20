abstract class Button{
  display: Display;
  value: string;
  posX: number;
  posY: number;

  constructor(display:Display, value:string,posX:number,posY:number){
    this.display = display;
    this.value = value;
    this.posX = posX;
    this.posY = posY;

    let button = createButton(this.value);
    button.style("background-color", this.defineColor())
    button.style("color", this.defineFontColor())
    button.style("width", "30px")
    button.position(this.posX, this.posY);
    button.mousePressed(() => {this.action()});
  }
  public defineFontColor(): string{
    return '#7687B1'
  }
  abstract defineColor():string;
  abstract action():void;
}