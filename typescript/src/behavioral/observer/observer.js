/**
 * Concrete classes
 */
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer))
                _this.observers.push(observer);
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return ParagraphObserver;
}());
/**
 * Client code
 */
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    document.body.appendChild(p);
    return p;
}
var input = makeInput();
var inputObservable = new InputObservable(input);
var observers = [];
for (var i = 0; i < 2; i++) {
    observers.push(new ParagraphObserver(makeParagraph()));
}
inputObservable.subscribe.apply(inputObservable, observers);
inputObservable.element.addEventListener('keyup', function () {
    inputObservable.notify();
});
