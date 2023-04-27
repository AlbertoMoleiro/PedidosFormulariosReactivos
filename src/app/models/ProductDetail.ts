//Create a class, attributes: _idOrder, _idProduct, _quantity

export class ProductDetail {

    constructor(
        private _idOrder: number,
        private _idProduct: string,
        private _quantity: number
    ) { }

    public get idOrder(): number {
        return this._idOrder;
    }
    get idProduct(): string {
        return this._idProduct;
    }

    set idProduct(value: string) {
        this._idProduct = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }


}

