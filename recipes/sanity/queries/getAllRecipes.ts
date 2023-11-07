import { SanityDocument, groq } from "next-sanity";
import { client } from "../lib/client";

export interface HomepageRecipeTag {
    name: string;
}

export interface HomepageRecipe extends SanityDocument {
    title: string;
    subtitle?: string;
    cookTime: number;
    prepTime: number;
    tags: Array<HomepageRecipeTag>;
    featuredImageAlt: string;
    featuredImageUrl: string;
    slug: string;
}

const getAllRecipesQuery = groq`
*[_type == "recipe" && slug.current != null] {
    title,
    subtitle,
    cookTime,
    prepTime,
    tags[]->{
      name
    },
    "featuredImageAlt":featuredImage.alt,
    "featuredImageUrl":featuredImage.asset->url,
    "slug": slug.current,
}`;

export const getAllRecipes = async () => await client.fetch<HomepageRecipe[]>(getAllRecipesQuery);
