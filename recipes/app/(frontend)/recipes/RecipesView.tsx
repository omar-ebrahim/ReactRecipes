import RecipeCard from "@/components/recipecard/RecipeCard";
import { getRecipesBySearchTerm } from "@/sanity/queries/getRecipesBySearchTerm";

type RecipeViewProps = {
  searchTerm: string;
};

const RecipesView = async ({ searchTerm }: RecipeViewProps) => {
  const recipes = await getRecipesBySearchTerm(searchTerm);
  return (
    <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
      {recipes.map((recipe) => (
        <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesView;
