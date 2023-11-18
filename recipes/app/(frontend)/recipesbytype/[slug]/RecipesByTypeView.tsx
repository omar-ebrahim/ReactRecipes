import RecipeCard from "@/components/recipecard/RecipeCard";
import SearchHeader from "@/components/searchheader/SearchHeader";
import { HomepageRecipe } from "@/sanity/documenttypes/HomepageRecipe";

type RecipesByTypeViewProps = {
    recipeType: string,
  recipes: Array<HomepageRecipe>;
};

const RecipesByTypeView = ({ recipes, recipeType }: RecipesByTypeViewProps) => {
  return (
    <div>
      <SearchHeader />
        <section className="pb-6">
          <header className="pt-4 px-8 mx-auto font-light text-4xl text-center">
            {recipeType}
          </header>
          <div className="px-4 gap-4 h-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 w-full">
            {recipes.map((r) => (
              <RecipeCard key={`$recipe_card_${r._id}`} recipe={r} />
            ))}
          </div>
          <div className="mx-auto mt-8 w-[200px] border border-b-slate-50"></div>
        </section>
    </div>
  );
};

export default RecipesByTypeView;
