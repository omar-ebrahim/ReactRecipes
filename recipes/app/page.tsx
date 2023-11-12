"use client";

import RecipeCard from "@/components/recipecard/RecipeCard";
import { HomepageRecipe, getAllRecipes } from "@/sanity/queries/getAllRecipes";
import { useState } from "react";

export default async function Home() {
  const [recipes, setRecipes] = useState<HomepageRecipe[]>([]);
  return (
    <>
      <div className="w-full px-4">
        <input
          type="text"
          className="w-full md:w-[400px] md:h-16 md:text-xl border border-slate-200 drop-shadow-md rounded-[24px] text-center block mx-auto p-2 mt-6"
          placeholder="Search for a recipe"
        />
      </div>
      <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
        {recipes.map((recipe) => (
          <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
