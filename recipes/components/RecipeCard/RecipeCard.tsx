import { HomepageRecipe } from "@/sanity/queries/getAllRecipes";
import Image from "next/image";
import React from 'react';
import Clock from './clock.svg'

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
    <div className="border shadow-md w-[250px] h-300px rounded-3xl text-center dark:bg-gray-700 bg-slate-100  dark:text-gray-300 text-slate-600 pb-4">
      <Image
        src={featuredImageUrl}
        alt={featuredImageAlt}
        width={250}
        height={150}
        className="rounded-t-2xl"
      />
      <p className="pt-2 pl-4 pr-4 font-semibold text-xl">{title}</p>
      {subtitle && <small className="inline-block p-2 text-[1em]">{subtitle}</small>}
      <p className="inline-flex gap-4 text-center align-middle"><Clock className="w-6 h-6" /><span>{prepTime + cookTime} mins</span></p>
    </div>
  );
};

export default RecipeCard;
