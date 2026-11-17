import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightcss]',
})
export class Highlightcss implements AfterViewInit {
  private readonly el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.el.nativeElement.style.color = 'red';
  }
}
