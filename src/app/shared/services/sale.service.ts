import { StockProduct } from '../../pages/stock-products/StockProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PriceProduct} from '../../pages/list-price-products/PriceProduct';

import { AmountSaleProductTotal } from '../../pages/amount-sale-product/AmountSaleProductTotal';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  _ulr : string = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }


  getAmountTotalProductSale():Observable<AmountSaleProductTotal[]>{
    return this.httpClient.get<AmountSaleProductTotal[]>(`${this._ulr}/amount-total-product?start=2000-01-01&end=2000-12-31`).pipe()
  }

}
