import { defineField, defineType } from "sanity";

export const Tag = defineType({
    title: 'Tag',
    name: 'tag',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().error('Tag name is reqired')
        }),
    ]
});