import { SanityDocument, groq } from "next-sanity";
import { client } from "../lib/client";
import { HomepageRecipe } from "../documenttypes/HomepageRecipe";

export interface RecipeByTag extends SanityDocument {
    name: string,
    recipes: Array<HomepageRecipe>
}

const getRecipesByTagQuery = groq`
*[_type == "tag" && slug.current != null] {
    _id,
    name,
    "recipes":*[_type == "recipe" && slug.current != null && references(^._id)][0...4] {
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

export const getRecipesByTag = async () =>
  await client.fetch<RecipeByTag[]>(getRecipesByTagQuery);
