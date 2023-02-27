import { Component } from '@angular/core';
import { SaleService } from 'src/app/shared/services/sale.service';
import { AmountSaleProductTotal } from './AmountSaleProductTotal';

@Component({
  selector: 'amount-sale-product',
  templateUrl: './amount-sale-product.component.html',
  styleUrls: ['./amount-sale-product.component.scss']
})
export class AmountSaleProductComponent {
  dataSource:AmountSaleProductTotal[] = [];

  constructor(private saleService: SaleService) {
    this.getData();
  }

  getData(){
    this.saleService.getAmountTotalProductSale().subscribe((data:AmountSaleProductTotal[])=>{

      this.dataSource = data;
    })
  }
}
