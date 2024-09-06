import RecipeCard from "@/components/recipecard/RecipeCard";
import { getRecipesBySearchTerm } from "@/sanity/queries/getRecipesBySearchTerm";
import SearchHeader from "@/components/searchheader/SearchHeader";

import styles from './RecipesView.module.css'

type RecipeViewProps = {
  searchTerm: string;
};

const RecipesView = async ({ searchTerm }: RecipeViewProps) => {
  const recipes = await getRecipesBySearchTerm(searchTerm);
  return (
    <div>
      <SearchHeader />
      {recipes.length > 0 && (
        <div className={styles.wrapper}>
          {recipes.map((recipe) => (
            <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
          ))}
        </div>
      )}
      {recipes.length === 0 && <p>No results :(</p>}
    </div>
  );
};

export default RecipesView;
