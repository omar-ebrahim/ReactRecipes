import { getRecipesBySearchTerm } from "@/sanity/queries/getRecipesBySearchTerm";
import RecipesView from "../../../components/recipesview/RecipesView";

type Props = {
  searchParams?: {
    searchTerm: string;
  };
};

// NOTE: Elastic would be better suited for site-wide search
// as the performance is a lot better than querying Sanity.

const Recipe = async (context: Props) => {
  if (!context.searchParams?.searchTerm) return;
  const recipes = await getRecipesBySearchTerm(context.searchParams?.searchTerm);
  return <RecipesView recipes={recipes} />;
};

export default Recipe;
