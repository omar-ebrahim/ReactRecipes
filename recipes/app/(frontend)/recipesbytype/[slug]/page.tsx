import { getRecipesBySpecifiedTag } from "@/sanity/queries/getRecipeByTag";
import RecipesByTypeView from "./RecipesByTypeView";

const RecipesByType = async (props: { params: { slug: string } }) => {
  const { slug } = props.params;
  const recipe = await getRecipesBySpecifiedTag(slug);
  return <RecipesByTypeView recipeType={recipe.name} recipes={recipe.recipes} />;
};

export default RecipesByType;
