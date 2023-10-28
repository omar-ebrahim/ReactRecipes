import { defineField, defineType } from "sanity";

export const Ingredient = defineType({
    title: 'Ingredient',
    name: 'ingredient',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().error('Name is reqired')
        }),
    ]
});