type Constructable = { new(...args: any[]): any; }

const generateId = (target: Constructable):any => {
    let generatedId = `id_${(Math.random() * 1000).toFixed(0)}`;
    return class extends target {
        id = generatedId;
    }
}

function readonly(target: any, key: string): void {
    Object.defineProperty(target, key, {
        writable: false,
        configurable: false,
    });
}

@generateId class User {
    private id: any;
    private name: string;
    @readonly
    private registrationDate: Date = new Date();
    private orderHistory: Array<Order>;

    constructor(name: string) {
        // let d = new Date();
        this.name = name;
        // this.registrationDate = d;
        this.orderHistory = new Array<Order>;
    }

    getName(): string {
        return this.name;
    }

    addOrder(ord: Order) {
        this.orderHistory.push(ord);
    }
}

class Order {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    addToShopingCart() {

    }
}

class ShoppingCart {
    private listOfGoods: Array<Good>;
}

class Good {

}


let me = new User('Polina');
console.log(me);