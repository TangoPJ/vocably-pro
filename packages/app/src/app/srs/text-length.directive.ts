import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextLength]',
})
export class TextLengthDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.setProperty(
      '--inner-text-length',
      this.el.nativeElement.innerText.length.toString()
    );

    this.el.nativeElement.style.setProperty(
      '--screen-width-px',
      window.innerWidth.toString()
    );

    this.el.nativeElement.style.setProperty(
      '--screen-height-px',
      window.innerHeight.toString()
    );
  }
}
