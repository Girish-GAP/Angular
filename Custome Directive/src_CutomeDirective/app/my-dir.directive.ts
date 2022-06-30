import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  // We attach the attribute directive to an element, which we call the parent element. 
  // To change the properties of the parent element, we need to get the reference. 
  // Angular injects the parent element when we ask for the instance of the ElementRef in its constructor.
  constructor(private ele : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
      this.setcolor("Blue")
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor("yellow")
  }

  // ElementRef is a wrapper for the Parent DOM element. 
  // We can access the DOM element via the property nativeElement. 
  // The style method allows us to add css properties to the element.
  setcolor(color : string)
  {
    this.ele.nativeElement.style.background = color;
  }

}
