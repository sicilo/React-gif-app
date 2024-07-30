import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Warcraft', 'GOT'])

    const onAddCategory = (newCategory) => {
        if (categories.map(cat => cat.toLowerCase()).includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            ></AddCategory>
            {
                categories.map((category) =>
                    (<GifGrid key={category} category={category}></GifGrid>)
                )
            }
        </>
    )
}
