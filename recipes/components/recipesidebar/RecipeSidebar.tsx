import { RecipeViewRecipeIngredient } from "@/sanity/queries/getRecipeBySlug";

type RecipeSidebarProps = {
    prepTime: number;
    cookTime: number;
    ingredients: RecipeViewRecipeIngredient[];
}

const formatIngredient = (ingredient: RecipeViewRecipeIngredient) => {
    if (!ingredient) return '';
    const { ingredientName, amount, unit } = ingredient;
    if (!amount) return ingredientName
    if (!unit) return `${amount} x ${ingredientName}`;
    return `${amount} ${unit} ${ingredientName}`
}

const RecipeSidebar = ({ prepTime, cookTime, ingredients }: RecipeSidebarProps) => {
    return (<section className="pb-8 lg:pt-36">
        <p>Prep time: {prepTime} mins.</p>
        <p>Cook time: {cookTime} mins.</p>
        {ingredients && (
            <section id="ingredients" className="pt-8">
                <h1 className="font-semibold text-3xl lg:text-xl">Ingredients</h1>
                <div className="mb-2 mt-4 underline text-slate-600 lg:hidden">
                    <a href='#recipe'>Jump to instructions</a>
                </div>
                <ul className="list-disc pt-2">
                    {ingredients.map((ingredient) => {
                        return <li key={`ingredient_item_${ingredient._id}`} className="ml-5 pb-1 pt-1">{formatIngredient(ingredient)}</li>
                    })}
                </ul>
            </section>
        )}
    </section>)
};

export default RecipeSidebar;
