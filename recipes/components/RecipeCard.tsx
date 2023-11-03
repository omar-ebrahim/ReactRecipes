import { HomepageRecipe } from "@/sanity/queries/getAllRecipes";

type RecipeCardProps = {
    recipe: HomepageRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { title, cookTime, featuredImageAlt, featuredImageUrl, prepTime, tags } = recipe;
    return <div>{title}</div>
};

export default RecipeCard;