import RecipeCard from "@/components/recipecard/RecipeCard";
import { getAllRecipes } from "@/sanity/queries/getAllRecipes";
import Pizza from "../images/pizza.jpg";
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
          src={Pizza.src}
          width={1920}
          height={1080}
          alt="pizza"
          className="w-full h-[180px] md:h-[350px] object-cover object-center opacity-75"
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
