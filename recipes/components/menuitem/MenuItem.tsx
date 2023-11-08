import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
    href: string;
    children: React.ReactNode;
}

const MenuItem = ({ href, children }: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`hover:bg-gray-200 p-2 rounded block ${isActive ? 'text-black font-semibold' : 'text-gray-500'}`}>{children}</Link>
    )
};

export default MenuItem;
