import { useEffect, useState } from "react";
import { Category } from "./Category";

function App() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://localhost:7065/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  });
  return (
    <div>
      <h1>Categories List</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category.id} - {category.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
