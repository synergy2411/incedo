import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector : '[appHighlight]'
})
export class HighlightDirective{

  @HostBinding('style.backgroundColor') bgColor  :any;
  @Input('bgColor') myColor : string;

  @HostListener('mouseenter') onmouseenter(){
    this.bgColor = this.myColor;
  }
  @HostListener('mouseleave') onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elRef : ElementRef ){
    // console.log(this.elRef.nativeElement);
    // this.elRef.nativeElement.style.backgroundColor = "aqua";
  }

}
