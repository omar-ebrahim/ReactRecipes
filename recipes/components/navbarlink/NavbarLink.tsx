import Link from "next/link";

type NavbarLinkProps = {
    url?: string;
    label: string;
};

const NavbarLink = ({ url = '/', label } : NavbarLinkProps) => {
    return (
        <Link href={url} title={label} className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-slate-100">
            {label}
        </Link>
    );
};

export default NavbarLink;
