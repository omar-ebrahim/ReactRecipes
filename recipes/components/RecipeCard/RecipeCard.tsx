import { HomepageRecipe } from '@/sanity/queries/getAllRecipes'
import Image from 'next/image'
import React from 'react'
import Clock from './clock.svg'
import Link from 'next/link'

type RecipeCardProps = {
    recipe: HomepageRecipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const {
        title,
        subtitle,
        cookTime,
        featuredImageAlt,
        featuredImageUrl,
        prepTime,
        slug,
    } = recipe
    return (
        <Link href={`/${slug}`} aria-label={title}>
            <div className="hover:bg-gray-50 border shadow-md md:w-[250px] lg:w-[250px] sm:w-full h-full rounded-xl p-4 text-center mt-4">
                <Image src={featuredImageUrl} alt={featuredImageAlt} width={220} height={150} className="rounded-md w-full h-[200px] object-cover object-center" />
                <p className="text-slate-600 pt-2 font-semibold text-lg">{title}</p>
                <div>
                    {subtitle && (
                        <small className="inline-block p-2 text-[1em]">
                            {subtitle}
                        </small>
                    )}
                </div>
                <div>
                    <p className="inline-flex gap-4 text-center align-middle">
                        <Clock className="w-6 h-6" />
                        <span>{prepTime + cookTime} mins</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard
