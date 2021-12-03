import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.setAttribute(this.appHighlight, '');
  }
}
