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
            validation: Rule => Rule.required().error('Title is reqired')
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
                    fields: [
                        {
                            name: 'ingredient',
                            title: 'Indredient',
                            type: 'reference',
                            to: [{ type: 'ingredient' }],
                            validation: Rule => Rule.required().error('Ingredient is required.')
                        },
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