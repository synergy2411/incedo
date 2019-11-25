// Destructuring - Array / Object

// let arr = ["Foo", "Bar", "Bam"];

// let  [arr1 , arr3] = arr;

// console.log(arr3);              // ?

// arr3 = "Baz";

// console.log(arr);           // ?

// let obj = {
//     drawText : text => console.log("Drawing : " + text),
//     drawCircle : r => console.log(Math.PI * r * r)
// }

// let {drawCircle : ds, drawText:  dt} = obj;

// // drawText("Sample Text");
// // dt("New Text")

// ds = (arg) => {console.log("Function assigned")}

// ds("ARG");

// obj.drawCircle(5);


// let arr = [{name : "Foo"}, {name : "Bar"}];

// let [obj1, obj2] = arr;

// obj1.name = "Bam";

// console.log(arr);

// Spread and Rest (...)

// let arr = [3,4,5];

// let newArray = [1,2,...arr,6,7];

// console.log(newArray);

// const demo = (name, ...args) =>{
//     console.log(args[0])
// }

// // demo("Foo")
// // demo("Foo", 32)
// demo("Foo", 32, true)



// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         // var self =this;
//         let nestFunc = () =>{
//             return "Hello " + this.firstName + " " + this.lastName;
//         }
//         return nestFunc();
//     }
// }

// console.log(user.sayHello());  


import { Student, MAGIC_NUMBER } from './student';
import { Person } from './person';
// let foo = new Student("Foo", "Bar", 32);

let obj : Person = {
    firstName : "Foo1",
    lastName : "Bar1",
    age :34
}
let foo1 = new Student(obj)
console.log(foo1.getName());

console.log(MAGIC_NUMBER);


