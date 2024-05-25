import { useState } from "react";
import { Dish } from "../../app/models/Dish";
import agent from "../../app/api/agent";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/store/configureStore";
import { setBasket } from "../basket/basketSlice";

interface Props {
    dish: Dish;
}

export default function DishCard({ dish }: Props) {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    function handleAddItem(dishId: number) {
        setLoading(true);
        agent.Basket.addItem(dishId)
            .then((basket) => dispatch(setBasket(basket)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <Card sx={{ backgroundColor: "dark" }}>
            <CardHeader title={dish.name} />
            <CardMedia sx={{ height: 140 }} image="http://picsum.photos/200" title={dish.name} />
            <CardContent>
                <Typography>Price: ${dish.price}</Typography>
                <Typography>{dish.description ? dish.description : "Discription of this dish will be here. "}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleAddItem(dish.id)} variant="contained" size="small">
                    Add
                </Button>
            </CardActions>
        </Card>
    );
}
