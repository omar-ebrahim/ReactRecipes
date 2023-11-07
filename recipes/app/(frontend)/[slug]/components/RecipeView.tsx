"use client";

import { RecipeViewRecipe, RecipeViewRecipeIngredient } from "@/sanity/queries/getReipceBySlug";
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import css from './recipeView.module.css'

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
        title,
        preamble,
        subtitle,
    } = recipe;
    console.log(recipe)
    return (
        <div className="p-4 lg:flex-col lg:gap-x-20 lg:grid-cols-[minmax(700px,_900px)_minmax(200px,_1fr)] lg:grid lg:w-fit lg:mx-auto lg:grid-rows-[auto_1fr]">
            <section className="pt-4 pb-8 text-center content-center">
                <header className="font-bold text-4xl pb-4">{title}</header>
                {subtitle && <h2 className="pt-4 pb-6 italic">{subtitle}</h2>}
                {featuredImageUrl && <Image src={featuredImageUrl} alt={featuredImageAlt} width={100} height={100} className="w-full max-h-[300px] lg:w-[200px] lg:rounded-full lg:h-[200px] lg:object-fill object-cover rounded-md lg:mx-auto" />}
            </section>
            <section className="pb-8 lg:pt-36">
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
                                return <li className="ml-5 pb-1 pt-1">{formatIngredient(ingredient)}</li>
                            })}
                        </ul>
                    </section>
                )}
            </section>
            <div>
                {preamble && (
                    <>
                        <header className="font-semibold text-3xl pb-2 lg:pb-4">Introduction</header>
                        <div className="mb-4 underline text-slate-600 lg:hidden">
                            <a href='#recipe'>Jump to instructions</a>
                        </div>
                        <PortableText value={preamble} />
                    </>
                )}
                <article>
                    <header id="recipe" className="font-semibold text-3xl pb-2 mt-4 lg:pb-4">Recipe</header>
                    <div className="mb-4 underline text-slate-600 lg:hidden">
                        <a href='#ingredients'>Jump to ingredients</a>
                    </div>
                    <PortableText value={instructions} />
                </article>
            </div>
        </div>
    )
};

export default RecipeView;
