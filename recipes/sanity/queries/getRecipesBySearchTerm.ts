import { groq } from "next-sanity";
import { client } from "../lib/client";
import { HomepageRecipe } from "../documenttypes/HomepageRecipe";

const getAllRecipesQuery = groq`
*[_type == "recipe" && slug.current != null && title match $searchTerm] {
    _id,
    title,
    subtitle,
    cookTime,
    prepTime,
    "featuredImageAlt":featuredImage.alt,
    "featuredImageUrl":featuredImage.asset->url,
    "slug": slug.current,
}
`;

export const getRecipesBySearchTerm = async (searchTerm: string) => {
  return await client.fetch<HomepageRecipe[]>(getAllRecipesQuery, {
    searchTerm: `*${searchTerm}*`,
  }, { cache: 'no-store' });
};
