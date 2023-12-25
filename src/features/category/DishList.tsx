import { Dish } from "../../app/models/Dish";
import { Grid, List } from "@mui/material";
import DishCard from "./DishCard";

interface Props {
    dishes: Dish[];
}

export default function DishList({ dishes }: Props) {
    return (
        <Grid container spacing={4}>
            {dishes.map((dish) => (
                <Grid item xs={4} key={dish.id}>
                    <DishCard dish={dish} />
                </Grid>
            ))}
        </Grid>
    );
}
