"use client";

import { RecipeViewRecipe, RecipeViewRecipeIngredient } from "@/sanity/queries/getReipceBySlug";
import css from './recipeView.module.css'
import Image from "next/image";
import { PortableText } from '@portabletext/react';

type RecipeViewProps = {
    data: RecipeViewRecipe;
}

const formatIngredient = (ingredient: RecipeViewRecipeIngredient) => {
    if (!ingredient) return '';
    const { ingredientName, amount, unit } = ingredient;
    if (!amount) return ingredientName
    if (!unit) return `${amount} x ${ingredientName}`;
    return `${amount} ${unit} ${ingredientName}`
}

const RecipeView = ({ data: recipe }: RecipeViewProps) => {
    const {
        cookTime,
        featuredImageAlt,
        featuredImageUrl,
        ingredients,
        instructions,
        prepTime,
        slug,
        title,
        preamble,
        subtitle,
    } = recipe;
    console.log(recipe)
    return (
        <div className="p-4">
            <section className="pt-4 pb-8 text-center">
                <header className="font-bold text-4xl pb-4">{title}</header>
                {subtitle && <h2 className="pt-4 pb-6 italic">{subtitle}</h2>}
                {featuredImageUrl && <Image src={featuredImageUrl} alt={featuredImageAlt} width={100} height={100} className="w-full max-h-[300px] object-cover rounded-md" />}
            </section>
            <section className="pb-8">
                <p>Prep time: {prepTime} mins.</p>
                <p>Cook time: {cookTime} mins.</p>
                {ingredients && (
                    <section id="ingredients" className="pt-8">
                        <h1 className="font-semibold text-3xl">Ingredients</h1>
                        <div className="mb-2 mt-4 underline text-slate-600">
                            <a href='#recipe'>Jump to instructions</a>
                        </div>
                        <ul className="list-disc pt-2">
                            {ingredients.map((ingredient) => {
                                return <li className="ml-5 pb-1 pt-1">{formatIngredient(ingredient)}</li>
                            })}
                        </ul>
                    </section>
                )}
            </section>
            <div className={css.preambleAndInstructions}>
                {preamble && (
                    <>
                        <header className="font-semibold text-3xl pb-2">Introduction</header>
                        <div className="mb-4 underline text-slate-600">
                            <a href='#recipe'>Jump to instructions</a>
                        </div>
                        <PortableText value={preamble} />
                    </>
                )}
                <article>
                    <header id="recipe" className="font-semibold text-3xl pb-2 mt-4">Recipe</header>
                    <div className="mb-4 underline text-slate-600">
                            <a href='#ingredients'>Jump to ingredients</a>
                        </div>
                    <PortableText value={instructions} />
                </article>
            </div>
        </div>
    )
};

export default RecipeView;
