import { AmountSaleProductComponent } from './pages/amount-sale-product/amount-sale-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxNumberBoxModule,
} from 'devextreme-angular';
import { Test1Component } from './pages/test1/test1.component';
import { ListPriceProductsComponent } from './pages/list-price-products/list-price-products.component';
import { StockProductsComponent } from './pages/stock-products/stock-products.component';
import { SalesCustomerComponent } from './pages/sales-customer/sales-customer.component';
const routes: Routes = [
  {
    path: 'pages/test1',
    component: Test1Component,
    canActivate: [AuthGuardService],
  },
  {
    path: 'price-products',
    component: ListPriceProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'stock-products',
    component: StockProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'sales-customer',
    component: SalesCustomerComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'amount-sale-product',
    component: AmountSaleProductComponent,
    canActivate: [AuthGuardService],
  },


  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxNumberBoxModule,
    DxDateBoxModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    Test1Component,
    ListPriceProductsComponent,
    StockProductsComponent,
    SalesCustomerComponent,
    AmountSaleProductComponent
  ],
})
export class AppRoutingModule {}
