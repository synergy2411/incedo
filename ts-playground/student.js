"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
    }
    Student.prototype.getName = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
exports.MAGIC_NUMBER = Math.round(Math.random() * 10);
