import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-method1',
  templateUrl: './method1.component.html',
  styleUrls: ['./method1.component.scss'],
})
export class Method1Component implements OnInit, AfterViewInit {
  @ViewChild('mytext') el!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.el.nativeElement.setAttribute('highLight', '');
  }
}
