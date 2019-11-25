// "use strict";
// // Destructuring - Array / Object
// exports.__esModule = true;
// // let arr = ["Foo", "Bar", "Bam"];
// // let  [arr1 , arr3] = arr;
// // console.log(arr3);              // ?
// // arr3 = "Baz";
// // console.log(arr);           // ?
// // let obj = {
// //     drawText : text => console.log("Drawing : " + text),
// //     drawCircle : r => console.log(Math.PI * r * r)
// // }
// // let {drawCircle : ds, drawText:  dt} = obj;
// // // drawText("Sample Text");
// // // dt("New Text")
// // ds = (arg) => {console.log("Function assigned")}
// // ds("ARG");
// // obj.drawCircle(5);
// // let arr = [{name : "Foo"}, {name : "Bar"}];
// // let [obj1, obj2] = arr;
// // obj1.name = "Bam";
// // console.log(arr);
// // Spread and Rest (...)
// // let arr = [3,4,5];
// // let newArray = [1,2,...arr,6,7];
// // console.log(newArray);
// // const demo = (name, ...args) =>{
// //     console.log(args[0])
// // }
// // // demo("Foo")
// // // demo("Foo", 32)
// // demo("Foo", 32, true)
// // let user = {
// //     firstName : "Foo",
// //     lastName : "Bar",
// //     sayHello : function(){
// //         // var self =this;
// //         let nestFunc = () =>{
// //             return "Hello " + this.firstName + " " + this.lastName;
// //         }
// //         return nestFunc();
// //     }
// // }
// // console.log(user.sayHello());  
// var student_1 = require("./student");
// // let foo = new Student("Foo", "Bar", 32);
// var obj = {
//     firstName: "Foo1",
//     lastName: "Bar1",
//     age: 34
// };
// var foo1 = new student_1.Student(obj);
// console.log(foo1.getName());
// console.log(student_1.MAGIC_NUMBER);



// function demo(arr){
//     if(arr.length > 2){
//         let flash = "FLASHING"
//         console.log(load);              // undefined
//     }else{
//         let load = "LOADING";
//     }
// }

// demo([1,2,3,4]);


// const user = {
//     name : "Foo"
// };

// user.name = "Bar";

// console.log(user);  

// const != immutable

