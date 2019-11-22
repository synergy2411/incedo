"use strict";

var add = function add(num1, num2) {
    var arr = [1, 2, 3, 4];
    var newarr = [].concat(arr);
    return num1 + num2;
};

console.log(add(2, 4));