import { SanityDocument } from "next-sanity";

export interface HomepageRecipe extends SanityDocument {
    title: string;
    subtitle?: string;
    cookTime: number;
    prepTime: number;
    featuredImageAlt: string;
    featuredImageUrl: string;
    slug: string;
}
