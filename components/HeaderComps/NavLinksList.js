import Link from "next/link";

export default function NavLinksList() {
  const navs = [
    { name: "Home", to: "/" },
    { name: "Articles", to: "/blog" },
    { name: "News", to: "/blog" },
    { name: "Categories", to: "/blog" },
  ];
  return (
    <div>
      <div className="space-x-7 font-semibold text-[17px]">
        {navs.map((nav, index) => (
          <Link key={index} href={nav.to}>
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
