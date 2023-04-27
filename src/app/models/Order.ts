//create a class Order, attributes _idOrder,_idClient,_payment,_address and getters and setters

export class Order {
    private static idStatic=0;
    private _idOrder: number;
    constructor(
        private _idClient: string,
        private _payment: string,
        private _address: string
    ) {
        this._idOrder=++Order.idStatic;
     }

    public get idOrder(): number {
        return this._idOrder;
    }

    get idClient(): string {
        return this._idClient;
    }

    set idClient(value: string) {
        this._idClient = value;
    }

    get payment(): string {
        return this._payment;
    }

    set payment(value: string) {
        this._payment = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

}