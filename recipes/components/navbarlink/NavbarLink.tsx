import Link from "next/link";
import styles from './NavbarLink.module.css';

type NavbarLinkProps = {
    url?: string;
    label: string;
};

const NavbarLink = ({ url = '/', label } : NavbarLinkProps) => {
    return (
        <Link href={url} title={label} className={styles.navLink}>
            {label}
        </Link>
    );
};

export default NavbarLink;
