import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-method1-structure',
  templateUrl: './method1-structure.component.html',
  styleUrls: ['./method1-structure.component.scss'],
})
export class Method1StructureComponent implements OnInit {
  @ViewChildren('child', { read: ElementRef })
  childComp!: QueryList<ElementRef>;
  // or   @ViewChild('child', { read: ElementRef }) childComp!: ElementRef;

  constructor(private renderer: Renderer2, private host: ElementRef) {}

  ngOnInit(): void {}

  change() {
    this.renderer.removeChild(
      this.host.nativeElement,
      this.childComp.first.nativeElement // or    this.childComp.nativeElement
    );
  }
}
