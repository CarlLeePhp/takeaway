import { useEffect, useState, Fragment } from "react";
import { Category } from "../../app/models/Category";
import DishList from "./DishList";
import { Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function CategoryPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        agent.Category.list().then((data) => setCategories(data));
    }, []);
    return (
        <>
            {categories.map((category) => (
                <Fragment key={category.id}>
                    <Typography variant="h4" sx={{ mt: 2 }}>
                        {category.description}
                    </Typography>
                    <hr />
                    <DishList dishes={category.dishDtos} />
                </Fragment>
            ))}
        </>
    );
}
