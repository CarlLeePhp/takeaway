import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";

export default function BasketSummary() {
    const { basket } = useAppSelector((state) => state.basket);
    const subtotal = basket?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) ?? 0;

    const deliveryFee = 10;

    return (
        <>
            <TableContainer component={Paper} variant={"outlined"}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">${subtotal.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">${deliveryFee.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">${(subtotal + deliveryFee).toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ fontStyle: "italic" }}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
