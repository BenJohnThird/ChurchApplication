import { Component, ElementRef, AfterViewInit, Input, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code',
  template: `
        <pre [ngClass]="'language-' + lang"><code #code><ng-content></ng-content>
</code></pre>
    `,
})
export class AppCodeComponent implements AfterViewInit {

  @Input() public lang = 'markup';

  @ViewChild('code') public codeViewChild: ElementRef;

  constructor(public el: ElementRef) {
  }

  public ngAfterViewInit() {
    // @ts-ignore
    if (window.Prism) {
      // @ts-ignore
      window.Prism.highlightElement(this.codeViewChild.nativeElement);
    }
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [AppCodeComponent],
  declarations: [AppCodeComponent]
})
export class AppCodeModule {
}
