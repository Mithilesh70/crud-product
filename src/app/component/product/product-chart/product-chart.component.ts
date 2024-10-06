import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-product-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './product-chart.component.html',
  styleUrl: './product-chart.component.scss',
})
export class ProductChartComponent implements OnInit {
  single: {
    name: string;
    value: number;
  }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.single = this.productService.getChartData();
  }
}
