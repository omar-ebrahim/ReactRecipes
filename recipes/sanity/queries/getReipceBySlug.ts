import { groq } from "next-sanity";
import { PortableTextBlock, SanityDocument } from "sanity";
import { client } from "../lib/client";

export interface RecipeViewRecipeIngredient extends SanityDocument {
    amount?: number;
    unit?: string;
    ingredientName: string;
}

export interface RecipeViewRecipe extends SanityDocument {
    title: string;
    slug: string;
    subtitle?: string;
    featuredImageAlt: string;
    featuredImageUrl: string;
    prepTime: number;
    cookTime: number;
    ingredients: Array<RecipeViewRecipeIngredient>;
    preamble?: PortableTextBlock;
    instructions: PortableTextBlock;
}

const getRecipeBySlugQuery = groq`
*[_type == "recipe" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    subtitle,
    "featuredImageAlt":featuredImage.alt,
    "featuredImageUrl":featuredImage.asset->url,
    prepTime,
    cookTime,
    ingredients[] {
        _id,
        amount,
        unit,
        "ingredientName":ingredient->name
    },
    preamble,
    instructions,
}
`;

export function getRecipeBySlug(slug: string) {
    if (!slug) {
        throw new Error('getRecipeBySlug: slug is required.');
    }

    return client.fetch<RecipeViewRecipe>(getRecipeBySlugQuery, { slug }, { cache: 'no-store' });
}

const recipesSlugsQuery = groq`
*[_type == "recipe" && defined(slug.current)].slug.current
`;

export function getRecipeSlugs() {
    return client.fetch<string[]>(recipesSlugsQuery, {}, { cache: 'no-store' })
};
