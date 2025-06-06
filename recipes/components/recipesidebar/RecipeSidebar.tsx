import { RecipeViewRecipeIngredient } from "@/sanity/queries/getRecipeBySlug";

import styles from './RecipeSidebar.module.css';
import { convertMinutesToHoursAndMinutes } from "@/utils/time";

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
    return (
        <section className={styles.sidebarSection}>
            <p>Prep time: {convertMinutesToHoursAndMinutes(prepTime)}</p>
            <p>Cook time: {convertMinutesToHoursAndMinutes(cookTime)}</p>
            {ingredients && (
                <section id="ingredients" className={styles.ingredients}>
                    <h1>Ingredients</h1>
                    <div className={styles.jumpLink}>
                        <a href='#recipe'>Jump to recipe</a>
                    </div>
                    <ul className={styles.ingredientsList}>
                        {ingredients.map((ingredient) => {
                            return <li key={`ingredient_item_${ingredient._id}`} className={styles.ingredientItem}>{formatIngredient(ingredient)}</li>
                        })}
                    </ul>
                </section>
            )}
        </section>
    )
};

export default RecipeSidebar;
