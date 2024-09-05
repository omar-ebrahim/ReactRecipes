import { getRecipeBySlug, getRecipeSlugs } from "@/sanity/queries/getRecipeBySlug";
import { notFound } from "next/navigation";
import RecipeView from "./components/RecipeView";

export async function generateStaticParams() {
    const slugs = await getRecipeSlugs();
    return slugs.map((slug) => ({ slug }))
}

const RecipePage = async (props: { params: { slug: string } }) => {
    const { slug } = props.params;
    const recipe = await getRecipeBySlug(slug);

    if (!recipe) {
        notFound();
    }

    return <RecipeView data={recipe} />
}

export default RecipePage;
