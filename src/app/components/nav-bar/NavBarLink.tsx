import Link from "next/link";

const NavBarLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      className="border-b px-1 pb-[3px] hover:border-b-4 hover:pb-0 hover:duration-150"
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavBarLink;
