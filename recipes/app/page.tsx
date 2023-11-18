import RecipeCard from "@/components/recipecard/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";
import Food from "../images/food.jpg";
import Image from "next/image";
import SearchBar from "@/components/searchbar/SearchBar";

export default async function Home() {
  const recipes = await getAllRecipes();
  return (
    <div>
      <div className="relative">
        <div className="absolute z-30 w-full h-full">
          <SearchBar />
        </div>
        <Image
          src={Food.src}
          width={4350}
          height={2900}
          alt="pizza"
          className="w-full h-[180px] md:h-[350px] object-cover object-center"
        />
      </div>

      <div className="gap-4 p-4 mx-auto h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-fit">
        {recipes.map((recipe) => (
          <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
