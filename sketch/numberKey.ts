class NumberKey extends Button{
  constructor(display:Display, value:string,posX:number,posY:number){
    super(display, value, posX, posY);
  }
  action():void{
    this.display.setValue = this.display.getValue + this.value;
  };

  defineColor():string{
    return '#EDEDF0'
  }

  

}