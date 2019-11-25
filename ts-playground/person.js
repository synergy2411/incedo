// export interface Person{
//     firstName : string;
//     lastName : string;
//     age : number;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return label; },
            configurable: false
        });
    };
}
var Student = /** @class */ (function () {
    function Student() {
        this.fname = "Foo";
    }
    __decorate([
        Override("Bar")
    ], Student.prototype, "fname");
    return Student;
}());
console.log(new Student().fname);
