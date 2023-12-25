import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

const midLinks = [
    { title: "Order", path: "/online" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
];

const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
];

export default function Header() {
    const { basket } = useAppSelector((state) => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component={NavLink} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
                    Shop Name
                </Typography>
                <List sx={{ display: "flex", mr: "auto" }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem component={NavLink} to={path} key={path} sx={{ color: "inherit", typography: "h6" }}>
                            {title}
                        </ListItem>
                    ))}
                </List>
                <IconButton component={Link} to="/basket" size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                    <Badge badgeContent={itemCount} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{ display: "flex" }}>
                    {rightLinks.map(({ title, path }) => (
                        <ListItem component={NavLink} to={path} key={path} sx={{ color: "inherit", typography: "h6" }}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    );
}
