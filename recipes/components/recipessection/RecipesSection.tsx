import { RecipeByTag } from "@/sanity/queries/getRecipesByTags"
import Link from "next/link";
import RecipeCard from "../recipecard/RecipeCard";

import styles from './RecipesSection.module.css'
import SectionDivider from "../sectiondivider/SectionDivider";

type RecipesSectionProps = {
    recipes: RecipeByTag[];
}

const RecipesSection = ({ recipes }: RecipesSectionProps) => {
    return (
        recipes.map((recipeGroup) => (
            <section key={`section_group_${recipeGroup._id}`} className={styles.sectionGroup}>
                <header className={styles.sectionHeader}>
                    <Link className={styles.title} href={`/recipesbytype/${recipeGroup.slug}`}>{recipeGroup.name}</Link>
                </header>
                <div className={styles.cardGroupContainer}>
                    {recipeGroup.recipes.map((recipe) => (
                        <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
                    ))}
                </div>
                <SectionDivider />
            </section>
        ))
    )
};

export default RecipesSection;
