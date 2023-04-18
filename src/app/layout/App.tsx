import { useEffect, useState } from "react";
import { Category } from "../models/Category";
import { List, ListItem, ListItemText, Button, CssBaseline } from "@mui/material";
import Header from "../../features/Header";

function App() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://localhost:7065/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  });
  return (
    <div>
      <CssBaseline />
      <Header />
      <List>
        {categories.map((category, index) => (
          <ListItem>
            <ListItemText>
              {category.id}: {category.description}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined">Outline</Button>
    </div>
  );
}

export default App;
