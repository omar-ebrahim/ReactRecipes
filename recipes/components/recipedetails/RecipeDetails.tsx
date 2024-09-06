import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

import styles from './RecipeDetails.module.css'

type RecipeDetailsProps = {
    instructions: PortableTextBlock
}

const RecipeDetails = ({ instructions }: RecipeDetailsProps) => {
    return (<article>
        <header id="recipe" className={styles.recipeHeader}>Recipe</header>
        <div className={styles.jumpSection}>
            <a href='#ingredients'>Jump to ingredients</a>
        </div>
        <PortableText value={instructions} />
    </article>)
};

export default RecipeDetails;
