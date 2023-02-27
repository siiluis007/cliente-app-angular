import { StockProduct } from './../../pages/stock-products/StockProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PriceProduct} from '../../pages/list-price-products/PriceProduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _ulr : string = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getListPriceProducts():Observable<PriceProduct[]>{
    return this.httpClient.get<PriceProduct[]>(`${this._ulr}/price-products`).pipe()
  }

  getStockProducts(limit:number):Observable<StockProduct[]>{
    return this.httpClient.get<StockProduct[]>(`${this._ulr}/stock-by-quantity/quantity?quantity=${limit}`).pipe()
  }
}
