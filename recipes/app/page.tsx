import RecipeCard from "@/components/recipecard/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";
import SearchHeader from "@/components/searchheader/SearchHeader";

export default async function Home() {
  const recipes = await getAllRecipes();
  return (
    <div>
      <SearchHeader />
      <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
        {recipes.map((recipe) => (
          <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
