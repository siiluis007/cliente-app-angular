import { SaleCustomer } from './SaleCustomer';
import { Component } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';


@Component({
  selector: 'sales-customer',
  templateUrl: './sales-customer.component.html',
  styleUrls: ['./sales-customer.component.scss']
})
export class SalesCustomerComponent {
  dataSource:SaleCustomer[] = [];
  limit = 35;
  constructor(private customerService: CustomerService) {
    this.getData();
  }

  getData(){
    this.customerService.getSalesCustomer(this.limit).subscribe((data:SaleCustomer[])=>{

      this.dataSource = data;
    })
  }

}
