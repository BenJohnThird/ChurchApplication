import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './messagesdemo.component.html',
  styles: [`
		:host ::ng-deep .p-message {
			margin-left: .25em;
		}

        :host ::ng-deep .p-toast{
            z-index:99999;
        }
    `],
  providers: [MessageService]
})
export class MessagesDemoComponent {

  public msgs: Message[] = [];

  constructor(private service: MessageService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Message', routerLink: ['/uikit/message']}
    ]);
  }

  public showInfoViaToast() {
    this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }

  public showWarnViaToast() {
    this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }

  public showErrorViaToast() {
    this.service.add({key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
  }

  public showSuccessViaToast() {
    this.service.add({key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent'});
  }

  public showInfoViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }

  public showWarnViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }

  public showErrorViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
  }

  public showSuccessViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Message sent'});
  }
}
