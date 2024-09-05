import { SanityDocument, groq } from "next-sanity";
import { client } from "../lib/client";
import { HomepageRecipe } from "../documenttypes/HomepageRecipe";

export interface RecipeByTag extends SanityDocument {
  name: string,
  recipes: Array<HomepageRecipe>
}

const getRecipesByTagQuery = groq`
*[_type == "tag" && slug.current == $slug][0]{
    _id,
    name,
    "recipes":*[_type == "recipe" && slug.current != null && references(^._id)] {
      _id,
      title,
      subtitle,
      cookTime,
      prepTime,
      "featuredImageAlt":featuredImage.alt,
      "featuredImageUrl":featuredImage.asset->url,
      "slug": slug.current,
    }
}
`;

export const getRecipesBySpecifiedTag = async (slug: string) =>
  await client.fetch<RecipeByTag>(getRecipesByTagQuery, { slug }, { cache: 'no-store' });

const tagsSlugsQuery = groq`
*[_type == "tag" && defined(slug.current)].slug.current
`;

export async function getTagSlugs() {
  return await client.fetch<string[]>(tagsSlugsQuery, {}, { perspective: 'published' });
}
