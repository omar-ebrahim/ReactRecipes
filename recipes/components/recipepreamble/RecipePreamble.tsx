import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

import styles from './RecipePreamble.module.css'

type RecipePreambleProps = {
    preamble: PortableTextBlock
}

const RecipePreamble: React.FC<RecipePreambleProps> = ({ preamble }: RecipePreambleProps) => {
    return (
        <>
            <header className={styles.header}>Introduction</header>
            <div className={styles.jumpLink}>
                <a href='#recipe'>Jump to instructions</a>
            </div>
            <PortableText value={preamble} />
        </>
    )
};

export default RecipePreamble;
