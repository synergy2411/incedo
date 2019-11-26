import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name  : "nationalcode"
})
export class NationalCodePipe implements PipeTransform{

  transform(value : any, code : any){
    if(code === "US"){
      return  "+1 " + value;
    }
    return  "+91 " + value;
  }
}
