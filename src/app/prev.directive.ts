import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  nextFn(){
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
     }

}
