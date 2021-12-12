import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-method2-structure',
  templateUrl: './method2-structure.component.html',
  styleUrls: ['./method2-structure.component.scss'],
})
export class Method2StructureComponent implements OnInit {
  @ViewChildren('child', { read: ElementRef })
  childComp!: QueryList<ElementRef>;
  @ViewChild('viewcontainer', { read: ViewContainerRef }) viewcontainer: any;
  @ViewChild('pchild', { read: TemplateRef }) template!: TemplateRef<any>;

  constructor(private renderer: Renderer2, private host: ElementRef) {}

  ngAfterViewChecked() {
    console.log('Child components count', this.childComp.length); // compte la présence de childComp
  }

  ngAfterViewInit() {
    this.viewcontainer.createEmbeddedView(this.template); // ajoute le composant child dans le container
  }

  removeChild() {
    this.viewcontainer.remove(); // supprime le contenu du container
  }

  ngOnInit() {}
}
