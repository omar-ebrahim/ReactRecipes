import { groq } from "next-sanity";
import { client } from "../lib/client";

export interface HomepageRecipeTag {
    name: string;
}

export interface HomepageRecipe {
    title: string;
    cookTime: number;
    prepTime: number;
    tags: Array<HomepageRecipeTag>;
    featuredImageAlt: string;
    featuredImageUrl: string;
}

const getAllRecipesQuery = groq`
*[_type == "recipe"] {
    title,
    cookTime,
    prepTime,
    tags[]->{
      name
    },
    "featuredImageAlt":featuredImage.alt,
    "featuredImageUrl":featuredImage.asset->url,
}`;

export const getAllRecipes = async () => await client.fetch<HomepageRecipe[]>(getAllRecipesQuery);