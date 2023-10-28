import { type SchemaTypeDefinition } from 'sanity'
import { Recipe } from './schemas/recipe'
import { Ingredient } from './schemas/ingredient'
import { Tag } from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Recipe, Ingredient, Tag],
}
