import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Order } from '../models/Order';
import { ProductDetail } from '../models/ProductDetail';

@Component({
    selector: 'app-formulario-pedido',
    templateUrl: './formulario-pedido.component.html',
    styleUrls: ['./formulario-pedido.component.css']
})
export class FormularioPedidoComponent {
    orderDetail: ProductDetail[] = [];
  orders: Order[] = [];
    order = new Order('', '', '');
    orderForm: FormGroup = new FormGroup({
        idClient: new FormControl(''),
        payment: new FormControl(''),
        address: new FormControl('')
    });



    constructor(private data: DataService) {


    }

    ngOnInit(): void {
        this.data.getOrderDetailAux().subscribe(data => {
            this.orderDetail = data;
        });
        this.data.getOrders().subscribe(data => {
            this.orders = data;
        });

    }

    placeOrder() {
        this.order.idClient = this.orderForm.value.idClient;
        this.order.payment = this.orderForm.value.payment;
        this.order.address = this.orderForm.value.address;
        this.data.addOrder(this.order);
        this.orderForm.reset();
        this.order = new Order('', '', '');
    }

    resetOrder() {
        this.orderForm.reset();
        this.data.resetOrderDetailAux();
    }
    getDetailById(idOrder: number) {
        return this.data.getDetailById(idOrder).filter(detail => detail.idOrder == idOrder);
    }
}
