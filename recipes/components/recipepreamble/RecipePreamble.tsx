import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type RecipePreambleProps = {
    preamble: PortableTextBlock
}

const RecipePreamble: React.FC<RecipePreambleProps> = ({ preamble }: RecipePreambleProps) => {
    return (
        <>
            <header className="font-semibold text-3xl pb-2 lg:pb-4">Introduction</header>
            <div className="mb-4 underline text-slate-600 lg:hidden">
                <a href='#recipe'>Jump to instructions</a>
            </div>
            <PortableText value={preamble} />
        </>
    )
};

export default RecipePreamble;
