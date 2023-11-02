import { getAllRecipes } from "@/sanity/queries/getAllRecipes";

export default async function Home() {
  const recipes = await getAllRecipes();
  console.log(recipes);

  return (
    <><h1>Hello world</h1><h2>Hi world</h2></>
  )
}
