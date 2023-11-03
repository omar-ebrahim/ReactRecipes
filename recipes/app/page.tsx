import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";

export default async function Home() {
  const recipes = await getAllRecipes();
  console.log(recipes);

  return (
    <>{recipes.map((r) => <RecipeCard recipe={r} />)}</>
  )
}
