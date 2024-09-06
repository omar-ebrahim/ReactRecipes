"use client";

import { RecipeViewRecipe, RecipeViewRecipeIngredient } from "@/sanity/queries/getRecipeBySlug";
import RecipeHeader from "@/components/recipeheader/RecipeHeader";
import RecipeSidebar from "@/components/recipesidebar/RecipeSidebar";
import RecipePreamble from "@/components/recipepreamble/RecipePreamble";
import RecipeDetails from "@/components/recipedetails/RecipeDetails";

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
        <div className="p-4 lg:flex-col lg:gap-x-20 lg:grid-cols-[minmax(700px,_900px)_minmax(200px,_1fr)] lg:grid lg:w-fit lg:mx-auto lg:grid-rows-[auto_1fr]">
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
