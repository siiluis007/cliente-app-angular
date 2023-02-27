import { PriceProduct } from './../list-price-products/PriceProduct';
export interface StockProduct extends PriceProduct {
  quantity:number;
}
