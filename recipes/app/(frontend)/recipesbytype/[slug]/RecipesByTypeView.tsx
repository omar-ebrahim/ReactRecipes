import RecipeCard from "@/components/recipecard/RecipeCard";
import SearchHeader from "@/components/searchheader/SearchHeader";
import { HomepageRecipe } from "@/sanity/documenttypes/HomepageRecipe";

import styles from './RecipesByType.module.css'
import SectionDivider from "@/components/sectiondivider/SectionDivider";

type RecipesByTypeViewProps = {
    recipeType: string,
  recipes: Array<HomepageRecipe>;
};

const RecipesByTypeView = ({ recipes, recipeType }: RecipesByTypeViewProps) => {
  return (
    <div>
        <section className={styles.conainer}>
          <header className={styles.header}>
            {recipeType}
          </header>
          <div className={styles.recipeCardsContainer}>
            {recipes.map((r) => (
              <RecipeCard key={`$recipe_card_${r._id}`} recipe={r} />
            ))}
          </div>
          <SectionDivider />
        </section>
    </div>
  );
};

export default RecipesByTypeView;
