class EqualKey extends Button{
  constructor(display:Display, value:string,posX:number,posY:number){
    super(display, value, posX, posY);
  }
  action(): void {
    this.display.setValue = eval(this.display.getValue);
  }
  defineColor():string{
    return '#E04955'
  }
  defineFontColor():string{
    return 'white'
  }
}