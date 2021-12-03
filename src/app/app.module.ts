import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Method3Component } from './dom-modifying-elements/method3/method3.component';
import { Method2Component } from './dom-modifying-elements/method2/method2.component';
import { Method1Component } from './dom-modifying-elements/method1/method1.component';
import { Method1StructureComponent } from './dom-modifying-structure/method1-structure/method1-structure.component';
import { HighlightDirective } from './dom-modifying-elements/method2/highlight.directive';
import { HighlightRendererDirective } from './dom-modifying-elements/method3/highlight-renderer.directive';
import { ChildComponent } from './dom-modifying-structure/method1-structure/child/child.component';
import { Method2StructureComponent } from './dom-modifying-structure/method2-structure/method2-structure.component';

@NgModule({
  declarations: [AppComponent, Method3Component, Method2Component, Method1Component, Method1StructureComponent, HighlightDirective, HighlightRendererDirective, ChildComponent, Method2StructureComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
