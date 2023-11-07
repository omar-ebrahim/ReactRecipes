import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";

export default async function Home() {
  const recipes = await getAllRecipes();
  console.log(recipes);

  return (
    <div className="lg:w-3/4 flex flex-wrap content-center gap-4 p-4 mx-auto h-full">
      {recipes.map((recipe) => (
        <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
      ))}
    </div>
  );
}
