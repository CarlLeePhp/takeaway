import { useEffect, useState } from "react";
import { Category } from "../../app/models/Category";
import { List, ListItem, ListItemText, Button } from "@mui/material";

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetch("https://localhost:7065/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  });
  return (
    <>
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
    </>
  );
}
