class EqualKey extends Button{
  constructor(display:Display, value:string,posX:number,posY:number){
    super(display, value, posX, posY);
  }
  action(): void {
    let result: string;
    try {
      result = eval(this.display.getValue);
    } catch (error:unknown) {
      console.log('ups')
      result = 'error';
    }
    this.display.setValue = result;
  }
  defineColor():string{
    return '#E04955'
  }
  defineFontColor():string{
    return 'white'
  }
}