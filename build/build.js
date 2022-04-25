var Button = (function () {
    function Button(display, value, posX, posY) {
        var _this = this;
        this.display = display;
        this.value = value;
        this.posX = posX;
        this.posY = posY;
        var button = createButton(this.value);
        button.style("background-color", this.defineColor());
        button.style("color", this.defineFontColor());
        button.style("width", "30px");
        button.position(this.posX, this.posY);
        button.mousePressed(function () { _this.action(); });
    }
    Button.prototype.defineFontColor = function () {
        return '#7687B1';
    };
    return Button;
}());
var Calculator = (function () {
    function Calculator(posX, posY) {
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
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var currentValue = this.buttonsValues[j + (i * 4)];
                if (this.buttonsValues[j + (i * 4)] === '=') {
                    this.buttons.push(new EqualKey(this.display, currentValue, (j * 50) + this.posX, (i * 50) + this.posY + 50));
                }
                else {
                    this.buttons.push(new NumberKey(this.display, currentValue, (j * 50) + this.posX, (i * 50) + this.posY + 50));
                }
            }
        }
    }
    Calculator.prototype.draw = function () {
        fill(45, 50, 58);
        rect(this.posX, this.posY, 180, 220);
        this.display.draw();
    };
    return Calculator;
}());
var Display = (function () {
    function Display(posX, posY) {
        this.value = '';
        this.posX = posX;
        this.posY = posY;
    }
    Display.prototype.draw = function () {
        fill(118, 135, 177);
        rect(this.posX, this.posY, 180, 40);
        fill(0);
        text(this.value, this.posX + 10, this.posY + 25);
    };
    Object.defineProperty(Display.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Display.prototype, "setValue", {
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return Display;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EqualKey = (function (_super) {
    __extends(EqualKey, _super);
    function EqualKey(display, value, posX, posY) {
        return _super.call(this, display, value, posX, posY) || this;
    }
    EqualKey.prototype.action = function () {
        var result;
        try {
            result = eval(this.display.getValue);
        }
        catch (error) {
            console.log('ups');
            result = 'error';
        }
        this.display.setValue = result;
    };
    EqualKey.prototype.defineColor = function () {
        return '#E04955';
    };
    EqualKey.prototype.defineFontColor = function () {
        return 'white';
    };
    return EqualKey;
}(Button));
var NumberKey = (function (_super) {
    __extends(NumberKey, _super);
    function NumberKey(display, value, posX, posY) {
        return _super.call(this, display, value, posX, posY) || this;
    }
    NumberKey.prototype.action = function () {
        var currentValue = this.display.getValue;
        if (currentValue !== 'error') {
            this.display.setValue = currentValue + this.value;
        }
        else {
            this.display.setValue = this.value;
        }
    };
    ;
    NumberKey.prototype.defineColor = function () {
        return '#EDEDF0';
    };
    return NumberKey;
}(Button));
var calculators;
function setup() {
    createCanvas(windowWidth, windowHeight);
    calculators = [
        new Calculator(0, 50),
        new Calculator(200, 50),
        new Calculator(400, 50),
    ];
}
function draw() {
    background(255);
    calculators.forEach(function (cal) { return cal.draw(); });
}
//# sourceMappingURL=build.js.map