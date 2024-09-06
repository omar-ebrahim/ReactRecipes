import Image from "next/image";
import styles from './RecipeHeader.module.css';

type RecipeHeaderProps = {
    title: string;
    subtitle?: string;
    featuredImageUrl?: string;
    featuredImageAlt?: string;
}

const RecipeHeader = ({ title, subtitle, featuredImageAlt = '', featuredImageUrl }: RecipeHeaderProps) => {
    return (
        <section className={styles.sectionContainer}>
            <header>{title}</header>
            {subtitle && <h2>{subtitle}</h2>}
            {featuredImageUrl && <Image priority src={featuredImageUrl} alt={featuredImageAlt} width={100} height={100} className={styles.featuredImage} />}
        </section>
    )
};

export default RecipeHeader;
