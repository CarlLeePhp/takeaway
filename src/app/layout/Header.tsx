import { AppBar, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "home", path: "" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Takeaway</Typography>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={{ color: "inherit", typography: "h6" }}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
