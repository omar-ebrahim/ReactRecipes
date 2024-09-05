import { getRecipesBySpecifiedTag, getTagSlugs } from "@/sanity/queries/getRecipeByTag";
import RecipesByTypeView from "./RecipesByTypeView";

export async function generateStaticParams() {
  const slugs = await getTagSlugs();
  return slugs.map((slug) => ({ slug }))
}

const RecipesByType = async (props: { params: { slug: string } }) => {
  const { slug } = props.params;
  const recipe = await getRecipesBySpecifiedTag(slug);
  return <RecipesByTypeView recipeType={recipe.name} recipes={recipe.recipes} />;
};

export default RecipesByType;
