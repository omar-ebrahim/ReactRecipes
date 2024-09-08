import Image from "next/image";
import React from "react";
import Clock from "./clock.svg";
import Link from "next/link";
import { HomepageRecipe } from "@/sanity/documenttypes/HomepageRecipe";

import styles from './RecipeCard.module.css';
import { convertMinutesToHoursAndMinutes } from "@/utils/time";

type RecipeCardProps = {
  recipe: HomepageRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const {
    title,
    subtitle,
    cookTime,
    featuredImageAlt,
    featuredImageUrl,
    prepTime,
    slug,
  } = recipe;
  return (
    <Link href={`/${slug}`} aria-label={title}>
      <div className={styles.recipeCard}>
        <Image
          src={featuredImageUrl}
          alt={featuredImageAlt}
          width={220}
          height={150}
          className={styles.cardImage}
        />
        <p className={styles.cardTitle}>{title}</p>
        <div>
          <p className={styles.cardTime}>
            <Clock />
            <span>{convertMinutesToHoursAndMinutes(prepTime + cookTime)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
