import Link from "next/link";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <div className="mx-auto flex items-center border-b-4 px-6 py-2 h-24">
      <h1 className="font bold">Project NextJs 13.4</h1>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <NavBarLink title="Home" href="/" />
          <NavBarLink title="About" href="/" />
          <NavBarLink title="Contact" href="/" />
          <NavBarLink title="Login" href="/" />
        </div>
      </div>
    </div>
  );
}
