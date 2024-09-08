"use client";

import { RecipeViewRecipe } from "@/sanity/queries/getRecipeBySlug";
import RecipeHeader from "@/components/recipeheader/RecipeHeader";
import RecipeSidebar from "@/components/recipesidebar/RecipeSidebar";
import RecipePreamble from "@/components/recipepreamble/RecipePreamble";
import RecipeDetails from "@/components/recipedetails/RecipeDetails";

import styles from './RecipeView.module.css'

type RecipeViewProps = {
    data: RecipeViewRecipe;
}

const RecipeView = ({ data: recipe }: RecipeViewProps) => {
    const {
        cookTime,
        featuredImageAlt,
        featuredImageUrl,
        ingredients,
        instructions,
        prepTime,
        title,
        preamble,
        subtitle,
    } = recipe;
    return (
        <div className={styles.mainContainer}>
            <RecipeHeader title={title} featuredImageAlt={featuredImageAlt} featuredImageUrl={featuredImageUrl} subtitle={subtitle} />
            <RecipeSidebar cookTime={cookTime} ingredients={ingredients} prepTime={prepTime} />
            <div>
                {preamble && <RecipePreamble preamble={preamble} />}
                <RecipeDetails instructions={instructions} />
            </div>
        </div>
    )
};

export default RecipeView;
