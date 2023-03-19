type Constructable = {
    new (...args: any[]): any;
};
declare const generateId: (target: Constructable) => any;
declare function readonly(target: any, key: string): void;
declare class User {
    private id;
    private name;
    private registrationDate;
    private orderHistory;
    constructor(name: string);
    getName(): string;
    addOrder(ord: Order): void;
}
declare class Order {
    private name;
    private price;
    constructor(name: string, price: number);
    addToShopingCart(): void;
}
declare class ShoppingCart {
    private listOfGoods;
}
declare class Good {
}
declare let me: User;
