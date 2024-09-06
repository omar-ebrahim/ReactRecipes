import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type RecipeDetailsProps = {
    instructions: PortableTextBlock
}

const RecipeDetails = ({ instructions }: RecipeDetailsProps) => {
    return (<article>
        <header id="recipe" className="font-semibold text-3xl pb-2 mt-4 lg:pb-4">Recipe</header>
        <div className="mb-4 underline text-slate-600 lg:hidden">
            <a href='#ingredients'>Jump to ingredients</a>
        </div>
        <PortableText value={instructions} />
    </article>)
};

export default RecipeDetails;
