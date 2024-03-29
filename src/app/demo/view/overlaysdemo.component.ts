import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';

@Component({
  templateUrl: './overlaysdemo.component.html',
  providers: [ConfirmationService, MessageService]
})
export class OverlaysDemoComponent implements OnInit {

  public images: any[];

  public display: boolean;

  public products: Product[];

  public selectedProduct: Product;

  public visibleSidebar1;

  public visibleSidebar2;

  public visibleSidebar3;

  public visibleSidebar4;

  public visibleSidebar5;

  constructor(private productService: ProductService, private confirmationService: ConfirmationService,
              private messageService: MessageService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Overlay', routerLink: ['/uikit/overlay']}
    ]);
  }

  public ngOnInit() {
    this.productService.getProductsSmall().then(products => this.products = products);

    this.images = [];
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos1.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos2.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos3.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos4.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
    });
  }

  public confirm1() {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?'
    });
  }

  public confirm2(event: Event) {
    this.confirmationService.confirm({
      key: 'confirm2',
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
      }
    });
  }

  public formatCurrency(value) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }
}
