class NumberKey extends Button{
  constructor(display:Display, value:string,posX:number,posY:number){
    super(display, value, posX, posY);
  }
  action():void{
    const currentValue = this.display.getValue
    if(currentValue !== 'error'){
      this.display.setValue = currentValue + this.value;
    }else{
      this.display.setValue = this.value;
    }
  };

  defineColor():string{
    return '#EDEDF0'
  }

  

}