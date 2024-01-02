import { Component, OnInit } from '@angular/core';
import { Product } from '../demo/domain/product';
import { ProductService } from '../demo/service/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  templateUrl: './app.crud.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['../../assets/demo/badges.scss']
})
export class AppCrudComponent implements OnInit {

  public productDialog: boolean;

  public deleteProductDialog = false;

  public deleteProductsDialog = false;

  public products: Product[];

  public product: Product;

  public selectedProducts: Product[];

  public submitted: boolean;

  public cols: any[];

  public statuses: any[];

  public rowsPerPageOptions = [5, 10, 20];

  constructor(private productService: ProductService, private messageService: MessageService,
              private confirmationService: ConfirmationService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Pages'},
      {label: 'Crud', routerLink: ['./vendor-styles/crud']}
    ]);
  }

  public ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'price', header: 'Price'},
      {field: 'category', header: 'Category'},
      {field: 'rating', header: 'Reviews'},
      {field: 'inventoryStatus', header: 'Status'}
    ];

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  public openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  public deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  public editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }

  public deleteProduct(product: Product) {
    this.deleteProductDialog = true;
    this.product = {...product};
  }

  public confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    this.selectedProducts = null;
  }

  public confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter(val => val.id !== this.product.id);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    this.product = {};
  }

  public hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  public saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        // @ts-ignore
        this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      } else {
        this.product.id = this.createId();
        this.product.code = this.createId();
        this.product.image = 'product-placeholder.svg';
        // @ts-ignore
        this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
        this.products.push(this.product);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  public findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  public createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
