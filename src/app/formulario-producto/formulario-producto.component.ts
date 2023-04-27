import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from '../models/ProductDetail';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-formulario-producto',
    templateUrl: './formulario-producto.component.html',
    styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
    idOrder: number = 0;
    orderDetail: ProductDetail[] = [];

    sub: Subscription ;

    productForm: FormGroup = new FormGroup({
        idProduct: new FormControl(''),
        quantity: new FormControl('')
    });


    constructor(private activatedRoute: ActivatedRoute, private data: DataService) {

        this.sub = this.data.getOrderDetailAux().subscribe(data => {
            this.orderDetail = data;
        }
        )
    }


    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.idOrder = Number(params['idOrder']);
        })
    }

    addProduct() {
        let product = new ProductDetail(this.idOrder, this.productForm.value.idProduct, this.productForm.value.quantity);
        this.data.orderDetailAux.push(product);
        this.productForm.reset();
    }

    removeDetailOrder(idProduct: string) {
        this.data.removeDetailOrderAux(idProduct);

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
