import { Component, Input } from '@angular/core';

enum BlockView {
  PREVIEW,
  CODE
}

@Component({
  selector: 'block-viewer',
  template: `
    <div class="block-section">
        <div class="block-header">
            <span class="block-title">
                <span>{{header}}</span>
                <span class="badge-free" *ngIf="free">Free</span>
                <span class="badge-new" *ngIf="new">New</span>
            </span>
            <div class="block-actions">
                <a tabindex="0" [ngClass]="{'block-action-active': blockView == BlockView.PREVIEW}" (click)="activateView($event, BlockView.PREVIEW)"><span>Preview</span></a>
                <a [attr.tabindex]="'0'" [ngClass]="{'block-action-active': blockView == BlockView.CODE}" (click)="activateView($event, BlockView.CODE)">
                    <span>Code</span>
                </a>
                <a [attr.tabindex]="'0'" class="block-action-copy" (click)="copyCode($event)"
                    pTooltip="Copied to clipboard" tooltipEvent="focus" tooltipPosition="bottom"><i class="pi pi-copy m-0"></i></a>
            </div>
        </div>
        <div class="block-content">
            <div [class]="containerClass" [ngStyle]="previewStyle" *ngIf="blockView == BlockView.PREVIEW">
                <ng-content></ng-content>
            </div>
            <div *ngIf="blockView == BlockView.CODE">
                <app-code lang="markup" ngPreserveWhitespaces>{{code}}
                </app-code>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./blockviewer.component.scss']
})
export class BlockViewer {

  @Input() public header: string;

  @Input() public code: string;

  @Input() public containerClass: string;

  @Input() public previewStyle: string;

  @Input() public free = true;

  @Input() public new = false;

  public BlockView = BlockView;

  public blockView: BlockView = BlockView.PREVIEW;

  public activateView(event: Event, blockView: BlockView) {

    this.blockView = blockView;
    event.preventDefault();
  }

  public async copyCode(event: Event) {
    await navigator.clipboard.writeText(this.code);
    event.preventDefault();
  }

}
