import { useState } from "react";
import agent from "../../app/api/agent";
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography, IconButton, TableHead, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeItem, setBasket } from "./basketSlice";
import { Add, Remove } from "@mui/icons-material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";

export default function BasketPage() {
    const [loading, setLoading] = useState(false);
    const { basket } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();

    function handleAddItem(dishId: number) {
        agent.Basket.addItem(dishId)
            .then((basket) => dispatch(setBasket(basket)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    function handleRemoveItem(dishId: number, quantity = 1) {
        // setLoading(true);
        agent.Basket.removeItem(dishId, quantity)
            .then(() => dispatch(removeItem({ dishId: dishId, quantity: quantity })))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    if (loading) return <Typography variant="h1">Loading...</Typography>;

    if (!basket || basket.items.length === 0) return <Typography variant="h3">Your basket is empty</Typography>;

    return (
        <>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dishes</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map((item) => (
                            <TableRow key={item.dishId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.description}</TableCell>
                                <TableCell align="right">${item.price}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleRemoveItem(item.dishId, 1)} color="error">
                                        <Remove />
                                    </IconButton>
                                    {item.quantity}
                                    <IconButton onClick={() => handleAddItem(item.dishId)} color="secondary">
                                        <Add />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => handleRemoveItem(item.dishId, item.quantity)} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth>
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
