import RecipesSection from "@/components/recipessection/RecipesSection";
import SearchHeader from "@/components/searchheader/SearchHeader";
import { getRecipesByAllTags } from "@/sanity/queries/getRecipesByTags";

export default async function Home() {
  const recipes = await getRecipesByAllTags();
  return (
    <>
      <SearchHeader />
      <RecipesSection recipes={recipes} />
    </>
  );
}
