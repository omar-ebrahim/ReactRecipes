import { groq } from "next-sanity";
import { client } from "../lib/client";
import { HomepageRecipe } from "../documenttypes/HomepageRecipe";

const getAllRecipesQuery = groq`
*[_type == "recipe" && slug.current != null][0...4] {
    _id,
    title,
    subtitle,
    cookTime,
    prepTime,
    "featuredImageAlt":featuredImage.alt,
    "featuredImageUrl":featuredImage.asset->url,
    "slug": slug.current,
}`;

export const getAllRecipes = async () =>
  await client.fetch<HomepageRecipe[]>(getAllRecipesQuery, { cache: 'no-store' });
