import type { Meta, StoryObj } from '@storybook/react';

import RecipeCard from './RecipeCard';

const meta: Meta<typeof RecipeCard> = {
    component: RecipeCard,
};

export default meta;
type Story = StoryObj<typeof RecipeCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: () => <RecipeCard recipe={{ title: "Porridge Bowl", cookTime: 1, prepTime: 1, featuredImageAlt: '', featuredImageUrl: '', tags: [] }} />,
};