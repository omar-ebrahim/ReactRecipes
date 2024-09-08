import RecipesView from "./components/RecipesView";

type Props = {
  searchParams?: {
    searchTerm: string;
  };
};

const Recipe = async (context: Props) => {
  if (!context.searchParams?.searchTerm) return;
  return <RecipesView searchTerm={context.searchParams.searchTerm} />;
};

export default Recipe;
