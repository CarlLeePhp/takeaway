import { Dish } from "./Dish";

export interface Category {
    id: number;
    description: string;
    dishDtos: Dish[];
}
