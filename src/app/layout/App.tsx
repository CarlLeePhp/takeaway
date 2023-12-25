import { CssBaseline, Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../store/configureStore";
import { useEffect } from "react";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import { setBasket } from "../../features/basket/basketSlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const buyerId = getCookie("buyerId");
        if (buyerId) {
            agent.Basket.get()
                .then((basket) => dispatch(setBasket(basket)))
                .catch((error) => console.log(error))
                .finally();
        }
    }, [setBasket]);

    return (
        <div>
            <CssBaseline />
            <Header />
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default App;
