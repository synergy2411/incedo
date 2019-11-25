// export interface Person{
//     firstName : string;
//     lastName : string;
//     age : number;
// }


function Override(label){
    return function(target, key){
        Object.defineProperty(target, key, {
            get : () => label,
            configurable : false
        })
    }
}

class Student {
    @Override("Bar") fname : string = "Foo";
}

console.log(new Student().fname);