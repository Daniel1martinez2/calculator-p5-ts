var Button = (function () {
    function Button(value, posX, posY) {
        this.value = value;
        this.posX = posX;
        this.posY = posY;
        var button = createButton("---" + this.value + "---");
        button.style("background-color", "#ff0000");
        button.style("color", "#ffffff");
        button.position(this.posX, this.posY);
        button.mousePressed(function () { console.log('hola'); });
    }
    Button.prototype.draw = function () {
    };
    return Button;
}());
var buttonsValues = [
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '/', '='
];
var buttons = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            buttons.push(new Button(buttonsValues[j + (i * 4)], j * 50, i * 50));
        }
    }
}
function draw() {
    background(255, 0, 255);
}
//# sourceMappingURL=build.js.map