import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from '../domain/customer';
import { CustomerService } from '../service/customerservice';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import { Table } from 'primeng/table';
import { BreadcrumbService } from '../../breadcrumb.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  templateUrl: './tabledemo.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['../../../assets/demo/badges.scss'],
  styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class TableDemoComponent implements OnInit {

  public customers1: Customer[];

  public customers2: Customer[];

  public customers3: Customer[];

  public selectedCustomers1: Customer[];

  public selectedCustomer: Customer;

  public representatives: Representative[];

  public statuses: any[];

  public products: Product[];

  public rowGroupMetadata: any;

  public expandedRows = {};

  public activityValues: number[] = [0, 100];

  public isExpanded = false;

  public idFrozen = false;

  public loading = true;

  @ViewChild('dt') public table: Table;

  @ViewChild('filter') public filter: ElementRef;

  constructor(private customerService: CustomerService, private productService: ProductService,
              private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Table', routerLink: ['/uikit/table']}
    ]);
  }

  public ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
    this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
    this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

    this.representatives = [
      {name: 'Amy Elsner', image: 'amyelsner.png'},
      {name: 'Anna Fali', image: 'annafali.png'},
      {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
      {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
      {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
      {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
      {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
      {name: 'Onyama Limba', image: 'onyamalimba.png'},
      {name: 'Stephen Shaw', image: 'stephenshaw.png'},
      {name: 'XuXue Feng', image: 'xuxuefeng.png'}
    ];

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
    ];
  }

  public onSort() {
    this.updateRowGroupMetaData();
  }

  public updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData.representative.name;

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = {index: 0, size: 1};
        } else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData.representative.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          } else {
            this.rowGroupMetadata[representativeName] = {index: i, size: 1};
          }
        }
      }
    }
  }

  public expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => this.expandedRows[product.name] = true);

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  public formatCurrency(value) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }

  public clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
