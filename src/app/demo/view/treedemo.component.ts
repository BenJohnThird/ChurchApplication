import { Component, OnInit } from '@angular/core';
import { NodeService } from '../service/nodeservice';
import { TreeNode } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './treedemo.component.html'
})
export class TreeDemoComponent implements OnInit {


  public files1: TreeNode[];

  public files2: TreeNode[];

  public files3: TreeNode[];

  public selectedFiles1: TreeNode;

  public selectedFiles2: TreeNode[];

  public selectedFiles3: TreeNode;

  public cols: any[];

  constructor(private nodeService: NodeService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Tree', routerLink: ['/uikit/tree']}
    ]);
  }

  public ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);
    this.nodeService.getFiles().then(files => {
      this.files3 = [{
        label: 'Root',
        children: files
      }];
    });

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'size', header: 'Size'},
      {field: 'type', header: 'Type'}
    ];
  }
}
