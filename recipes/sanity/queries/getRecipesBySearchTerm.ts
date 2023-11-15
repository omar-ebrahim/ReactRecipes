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
    featuredImageAlt: string;
    featuredImageUrl: string;
    slug: string;
}

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

export const getRecipesBySearchTerm = async (searchTerm: string) =>  {
    return await client.fetch<HomepageRecipe[]>(getAllRecipesQuery, { searchTerm: `${searchTerm}*`});
}
