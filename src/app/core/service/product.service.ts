import { Injectable, signal } from '@angular/core';
import { ProductDetails } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsData = signal<ProductDetails[]>([
    {
      productName: 'Nike air jordans',
      productPrice: 7800,
      productCategory: 'Shoes',
      productImage: '',
      productFor: 'Men',
    },
    {
      productName: 'Nike air max Dn',
      productPrice: 13995,
      productCategory: 'Sneakers',
      productImage: '',
      productFor: 'Women',
    },
  ]);
  constructor() {}

  updateProductsData(data: ProductDetails, index: number) {
    this.productsData.update((val) => {
      val[index] = data;
      return val;
    });
  }

  deleteProductsData(index: number) {
    this.productsData.update((val) => {
      val.splice(index, 1);
      return val;
    });
  }

  getChartData(): { name: string; value: number }[] {
    const result = this.productsData().reduce(
      (acc: { name: string; value: number }[], product: ProductDetails) => {
        const { productCategory, productPrice } = product;
        const category = acc.find((item) => item.name === productCategory);
        if (category) {
          category.value += productPrice;
        } else {
          acc.push({ name: productCategory, value: productPrice });
        }
        return acc;
      },
      []
    );

    return result;
  }
}
