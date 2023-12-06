import RecipeCard from "@/components/recipecard/RecipeCard";
import SearchHeader from "@/components/searchheader/SearchHeader";
import { getRecipesByAllTags } from "@/sanity/queries/getRecipesByTags";
import Link from "next/link";

export default async function Home() {
  const recipes = await getRecipesByAllTags();
  return (
    <div>
      <SearchHeader />
      {recipes.map((recipeGroup) => (
        <section key={`section_group_${recipeGroup._id}`} className="pb-6 md:max-w-[1200px] mx-auto">
          <header className="pt-4 md:pt-8 px-8 mx-auto text-4xl text-center text-slate-700">
            <Link className="font-extrabold" href={`/recipesbytype/${recipeGroup.slug}`}>{recipeGroup.name}</Link>
          </header>
          <div className="px-4 gap-4 h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-full">
            {recipeGroup.recipes.map((recipe) => (
              <RecipeCard key={`$recipe_card_${recipe._id}`} recipe={recipe} />
            ))}
          </div>
          <div className="mx-auto mt-8 w-[200px] border border-b-slate-50"></div>
        </section>
      ))}
    </div>
  );
}
