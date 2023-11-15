import RecipeCard from "@/components/recipecard/RecipeCard";
import SearchBarWrapper from "@/components/searchbar/SearchBarWrapper";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";

export default async function Home() {
  const recipes = await getAllRecipes();
  return (
    <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
      {recipes.map((recipe) => (
        <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
      ))}
    </div>
  );
}
