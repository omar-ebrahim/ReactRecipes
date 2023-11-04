import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";

export default async function Home() {
  const recipes = await getAllRecipes();
  console.log(recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
      ))}
    </>
  );
}
