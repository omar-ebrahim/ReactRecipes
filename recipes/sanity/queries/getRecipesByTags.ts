import { SanityDocument, groq } from "next-sanity";
import { client } from "../lib/client";
import { HomepageRecipe } from "../documenttypes/HomepageRecipe";

export interface RecipeByTag extends SanityDocument {
  name: string;
  slug: string;
  recipes: Array<HomepageRecipe>;
}

const getRecipesByAllTagsQuery = groq`
*[_type == "tag" && slug.current != null && count(*[_type == "recipe" && slug.current != null && references(^._id)]) > 0] {
    _id,
    name,
    "slug": slug.current,
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

export const getRecipesByAllTags = async () =>
  await client.fetch<RecipeByTag[]>(getRecipesByAllTagsQuery, {}, { cache: 'no-store' });
