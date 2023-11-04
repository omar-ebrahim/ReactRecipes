import { HomepageRecipe } from "@/sanity/queries/getAllRecipes";
import Image from "next/image";
import React from 'react';

type RecipeCardProps = {
  recipe: HomepageRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const {
    title,
    subtitle,
    cookTime,
    featuredImageAlt,
    featuredImageUrl,
    prepTime,
    tags,
  } = recipe;
  return (
    <div className="border shadow-md w-[250px] h-300px rounded-3xl p-4 text-center">
      <Image
        src={featuredImageUrl}
        alt={featuredImageAlt}
        width={220}
        height={150}
        className="rounded-2xl"
      />
      <p className="text-slate-600 pt-2 font-semibold text-xl">{title}</p>
      {subtitle && <small>{subtitle}</small>}
    </div>
  );
};

export default RecipeCard;
