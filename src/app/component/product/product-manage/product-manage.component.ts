import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService, ValidationService } from '@app/core';
import {
  ControlsOf,
  NumberOnlyDirective,
  ProductDetails,
  ProductDetailsForm,
} from '@app/shared';

@Component({
  selector: 'app-product-manage',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NumberOnlyDirective,
  ],
  templateUrl: './product-manage.component.html',
  styleUrl: './product-manage.component.scss',
})
export class ProductManageComponent implements OnInit {
  productForm!: FormGroup<ControlsOf<ProductDetailsForm>>;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef,
    private productService: ProductService,
    @Inject(DIALOG_DATA)
    public data: {
      index: number;
    }
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.productForm.invalid) {
      return;
    }

    const payload: ProductDetails = {
      ...(this.productForm.value as ProductDetailsForm),
      productPrice:
        Number(this.productForm.controls['productPrice'].value) || 0,
    };
    this.closeModal({ details: payload, index: this.data.index });
  }

  closeModal(data?: { details: ProductDetails; index?: number }) {
    this.dialogRef.close(data);
  }

  private initializeForm() {
    this.productForm = this.fb.group<ControlsOf<ProductDetailsForm>>({
      productCategory: this.fb.nonNullable.control('Shoes', [
        ValidationService.required,
      ]),
      productFor: this.fb.nonNullable.control('Men', [
        ValidationService.required,
      ]),
      productImage: this.fb.nonNullable.control(''),
      productName: this.fb.nonNullable.control('', [
        ValidationService.required,
      ]),
      productPrice: this.fb.nonNullable.control('', [
        ValidationService.required,
      ]),
    });

    console.log(':details------->', this.data.index !== undefined);
    if (this.data.index !== undefined) {
      const details = this.productService.productsData()[this.data.index];
      this.productForm.patchValue({
        ...details,
        productPrice: details.productPrice.toString(),
      });
    }
  }
}
