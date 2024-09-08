import RecipesSection from "@/components/recipessection/RecipesSection";
import { getRecipesByAllTags } from "@/sanity/queries/getRecipesByTags";

export default async function Home() {
  const recipes = await getRecipesByAllTags();
  return <RecipesSection recipes={recipes} />;
}
