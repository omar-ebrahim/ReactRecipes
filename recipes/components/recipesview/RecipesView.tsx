import RecipeCard from "@/components/recipecard/RecipeCard";

import styles from './RecipesView.module.css'
import { HomepageRecipe } from "@/sanity/documenttypes/HomepageRecipe";
import NoResultsView from "../noresults/NoResultsView";

type RecipeViewProps = {
  recipes?: HomepageRecipe[]
};

const RecipesView = async ({ recipes }: RecipeViewProps) => {
  return (
    <div>
      {recipes && recipes.length > 0 && (
        <div className={styles.wrapper}>
          {recipes.map((recipe) => (
            <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
          ))}
        </div>
      )}
      {!recipes || recipes.length === 0 && <NoResultsView />}
    </div>
  );
};

export default RecipesView;
