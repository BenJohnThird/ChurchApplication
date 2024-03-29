import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './filedemo.component.html',
  providers: [MessageService]
})
export class FileDemoComponent {

  public uploadedFiles: any[] = [];

  constructor(private breadcrumbService: BreadcrumbService, private messageService: MessageService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'File', routerLink: ['/uikit/file']}
    ]);
  }

  public onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }

  public onBasicUpload(event) {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }
}
