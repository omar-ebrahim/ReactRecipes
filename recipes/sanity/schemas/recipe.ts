import { defineField, defineType } from "sanity";

export const Recipe = defineType({
    title: 'Recipe',
    name: 'recipe',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'Minimum 3 characters, maximum 25 characters.',
            validation: Rule => Rule.required().error('Title is reqired').min(3).max(25)
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: 'title'
            }
        }),
        defineField({
            title: 'Subtitle',
            name: 'subtitle',
            type: 'string',
            description: 'Minimum 10 characters, maximum 50 characters.',
            validation: Rule => Rule.min(10).max(50)
        }),
        defineField({
            title: 'Featured Image',
            name: 'featuredImage',
            type: 'image',
            fields: [
                defineField({ 
                  name: 'alt',
                  type: 'string',
                  validation: Rule => Rule.required().error('Alt is required for the featured image.')
                })
              ],
            validation: Rule => Rule.required().error('Featured Image is required')
        }),
        defineField({
            title: 'Prep time (mins)',
            name: 'prepTime',
            type: 'number',
            validation: Rule => Rule.required().error('Prep time is required.')
        }),
        defineField({
            title: 'Cook time (mins)',
            name: 'cookTime',
            type: 'number',
            validation: Rule => Rule.required().error('Cook time is required.')
        }),
        defineField({
            title: 'Ingredients',
            name: 'ingredients',
            type: 'array',
            of: [
                {
                    type: 'object',
                    preview: {
                        select: {
                            ingredient: 'ingredient.name',
                            brand: 'ingredient.brand',
                            amount: 'amount',
                            unit: 'unit'
                        },
                        prepare(selection){
                            const { ingredient, amount, unit, brand = '' } = selection;
                            return { title: `${amount}${unit} ${brand ? `${brand} ` : ''}${ingredient}`}
                        }
                    },
                    fields: [
                        defineField({
                            name: 'ingredient',
                            title: 'Indredient',
                            type: 'reference',
                            to: [{ type: 'ingredient' }],
                            validation: Rule => Rule.required().error('Ingredient is required.')
                        }),
                        defineField({
                            title: 'Amount',
                            name: 'amount',
                            type: 'number',
                            validation: Rule => Rule.required().error('Amount is required.')
                        }),
                        defineField({
                            title: 'Unit',
                            name: 'unit',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'ml', value: 'ml' },
                                    { title: 'l', value: 'l' },
                                    { title: 'tsp', value: 'tsp' },
                                    { title: 'tbsp', value: 'tbsp' },
                                    { title: 'fl. oz', value: 'fl. oz' },
                                    { title: 'cup', value: 'cup' },
                                    { title: 'pint', value: 'pint' },
                                    { title: 'quart', value: 'quart' },
                                    { title: 'gallon', value: 'gallon' },
                                    { title: 'mg', value: 'mg' },
                                    { title: 'g', value: 'g' },
                                    { title: 'kg', value: 'kg' },
                                    { title: 'lb', value: 'lb' },
                                    { title: 'oz', value: 'oz' }
                                ],
                            },
                        })
                    ],
                }
            ]
        }),
        defineField({
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
        defineField({
            title: 'Preamble',
            description: 'Optional preamble before the actual recipe.',
            name: 'preamble',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            title: 'Recipe instructions',
            name: 'instructions',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required().error('Cook time is required.')
        })
    ]
});