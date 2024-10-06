import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, computed, NgModule } from '@angular/core';
import { CoreService, ProductService } from '@app/core';
import { ConfirmationComponent, ProductDetails } from '@app/shared';

import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ProductManageComponent } from '../product-manage/product-manage.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductChartComponent } from '../product-chart/product-chart.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    NgbTooltipModule,
    NgxChartsModule,
    ProductChartComponent,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export default class ProductListComponent {
  productList = computed(() => this.productService.productsData());
  dialogRef!: DialogRef<
    { details: ProductDetails; index: number },
    ProductManageComponent
  >;
  deleteDialogRef!: DialogRef<boolean, ConfirmationComponent>;
  isListVisible = false;
  stateOptions: any[] = [
    { label: 'List', value: true },
    { label: 'Chart', value: false },
  ];
  value = true;

  constructor(
    private productService: ProductService,
    private dialog: Dialog,
    private coreService: CoreService
  ) {}

  openManageDialog(index: number | undefined) {
    this.dialogRef = this.dialog.open(ProductManageComponent, {
      width: '55rem',
      panelClass: 'dialog-scroll',
      data: { index },
    });

    this.dialogRef.closed.subscribe((res) => {
      if (res?.details) {
        this.updateProduct(res.details, res.index);
      }
    });
  }

  deleteProduct(index: number) {
    this.deleteDialogRef = this.dialog.open(ConfirmationComponent, {
      width: '45rem',
      data: {
        confirmationTitle: 'Delete Product?',
        confirmationMessage: 'Are you sure you want to delete the product?',
      },
    });
    this.deleteDialogRef.closed.subscribe((res) => {
      if (res) {
        this.productService.deleteProductsData(index);
        this.coreService.showToast('success', `Product deleted successfully`);
      }
    });
  }

  private updateProduct(data: ProductDetails, index?: number) {
    this.productService.updateProductsData(
      data,
      index !== undefined ? index : this.productList().length
    );
    this.coreService.showToast(
      'success',
      `Product ${index !== undefined ? 'edited' : 'added'} successfully`
    );
  }
}
