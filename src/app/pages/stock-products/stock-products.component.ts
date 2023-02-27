import { StockProduct } from './StockProduct';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  dataSource:StockProduct[] = [];
  limit = 5;
  constructor(private productService: ProductService) {
    this.getData();
  }

  changedLimit(vent:any){
    if (!vent.value) {
      this.limit = 5;
      this.getData();
      return
    }
    this.limit = vent.value;
    this.getData();
  }
  getData(){
    this.productService.getStockProducts(this.limit).subscribe((data:StockProduct[])=>{
      this.dataSource = data;
    })
  }
}
