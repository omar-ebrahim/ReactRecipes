import { getRecipeBySlug } from "@/sanity/queries/getReipceBySlug";
import { notFound } from "next/navigation";
import RecipeView from "./components/RecipeView";

const RecipePage = async (props: { params: { slug: string } }) => {
    const { slug } = props.params;
    const recipe = await getRecipeBySlug(slug);

    if (!recipe) {
        notFound();
    }

    return <RecipeView data={recipe} />
}

export default RecipePage;
