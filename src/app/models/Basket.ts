export interface BasketItem {
    quantity: number;
    dishId: number;
    name: string;
    description: string;
    price: number;
}
export interface Basket {
    id: number;
    buyerId: string;
    items: BasketItem[];
}
