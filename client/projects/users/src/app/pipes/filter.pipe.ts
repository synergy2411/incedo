import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, filterStatus: string): any {
    console.log("TRANSFORM");
    if (filterStatus === "") {
      return todos;
    }

    let resultArray = [];
    for (let todo of todos) {
      if (todo['status'] === filterStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
