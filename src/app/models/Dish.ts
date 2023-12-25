export interface Dish {
    id: number;
    name: string;
    description?: string;
    pictureUrl?: string;
    price: number;
    discount: number;
    categoryId: number;
    categoryName: string;
}
