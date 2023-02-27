import { StockProduct } from '../../pages/stock-products/StockProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PriceProduct} from '../../pages/list-price-products/PriceProduct';
import { SaleCustomer } from 'src/app/pages/sales-customer/SaleCustomer';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  _ulr : string = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }


  getSalesCustomer(limit:number):Observable<SaleCustomer[]>{
    return this.httpClient.get<SaleCustomer[]>(`${this._ulr}/sales-customer-by-date?start=2000-02-01&end=2000-02-10&age=${limit}`).pipe()
  }

}
