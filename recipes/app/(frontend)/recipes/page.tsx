"use client"

import RecipeCard from "@/components/recipecard/RecipeCard";
import SearchBar from "@/components/searchbar/SearchBar";
import { getRecipesBySearchTerm } from "@/sanity/queries/getRecipesBySearchTerm";

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    searchTerm: string;
  };
};

async function getServerSideProps(searchTerm: string) {
  const recipes = await getRecipesBySearchTerm(searchTerm);
  return recipes;
}

const Currentweather = async (context: Props) => {
  console.log(context.searchParams?.searchTerm);
  if (!context.searchParams?.searchTerm) return;
  let recipes = await getServerSideProps(context.searchParams?.searchTerm);
  return (
    <>
      <SearchBar />

      <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
        {recipes.map((recipe) => (
          <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Currentweather;
