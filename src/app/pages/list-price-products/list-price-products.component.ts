import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { PriceProduct } from './PriceProduct';

@Component({
  selector: 'list-price-products',
  templateUrl: './list-price-products.component.html',
  styleUrls: ['./list-price-products.component.scss'],
})
export class ListPriceProductsComponent implements OnInit {
  dataSource: PriceProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getListPriceProducts().subscribe((data:PriceProduct[])=>{
      this.dataSource = data;
    })
  }

  ngOnInit(): void {

  }

}
