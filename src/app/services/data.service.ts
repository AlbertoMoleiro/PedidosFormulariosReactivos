import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { ProductDetail } from '../models/ProductDetail';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    orders: Order[] = [];
    orderDetail: ProductDetail[] = [];
    orderDetailAux: ProductDetail[] = [];



    addOrder(order: Order) {
        this.orders.push(order);
        this.addOrderDetail();
        console.log("pedidos->", this.orders);
        console.log("detalle->", this.orderDetail);

    }

    addOrderDetail() {
        this.orderDetail.push(...this.orderDetailAux);
        this.resetOrderDetailAux();
    }

    getOrderDetailAux(): Observable<ProductDetail[]> {
        return of(this.orderDetailAux);
    }
    getOrders(): Observable<Order[]> {
        return of(this.orders);
    }
    getDetailById(idOrder: number): ProductDetail[] {
        return this.orderDetail.filter(detail => detail.idOrder == idOrder);
    }

    removeDetailOrderAux(idProduct: string) {
        this.orderDetailAux.splice(this.orderDetailAux.findIndex(product => product.idProduct == idProduct), 1);

    }
    resetOrderDetailAux() {
        this.orderDetailAux.splice(0, this.orderDetailAux.length);
    }

}
