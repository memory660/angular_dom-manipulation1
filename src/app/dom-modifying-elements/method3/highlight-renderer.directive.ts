import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRenderer]',
})
export class HighlightRendererDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'highlight', '');
  }
}
