import Image from "next/image";

type RecipeHeaderProps = {
    title: string;
    subtitle?: string;
    featuredImageUrl?: string;
    featuredImageAlt?: string;
}

const RecipeHeader = ({ title, subtitle, featuredImageAlt = '', featuredImageUrl }: RecipeHeaderProps) => {
    return (
        <section className="pt-4 pb-8 text-center content-center">
            <header className="font-bold text-4xl pb-4">{title}</header>
            {subtitle && <h2 className="pt-4 pb-6 italic">{subtitle}</h2>}
            {featuredImageUrl && <Image priority src={featuredImageUrl} alt={featuredImageAlt} width={100} height={100} className="w-full max-h-[300px] lg:w-[250px] lg:rounded-full lg:h-[250px] object-cover rounded-md lg:mx-auto" />}
        </section>
    )
};

export default RecipeHeader;
