import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function MobMenu({ categories, showMenu }) {
  const [Show, setShow] = useState(false);
  const navs = [
    { name: "Home", to: "/" },
    { name: "Articles", to: "/blog" },
    { name: "News", to: "/blog" },
    // { name: "Categories", to: "/blog" },
  ];
  function showCategory() {
    setShow(!Show);
  }

  return (
    <div
      className={`fixed w-2/3 left-0 top-0 h-full bg-white transition-transform delay-150 z-10 ${
        showMenu ? "" : "-translate-x-full"
      } `}
    >
      <div className="relative w-36 h-10 m-auto">
        <Image src={`/websiteSVGname.svg`} alt="" layout="fill" className="" />
      </div>
      <div className="flex flex-col text-gray-90 font-semibold text-xl mt-6 mb-4 space-y-5 mx-12">
        {navs.map((nav, index) => (
          <Link key={index} href={nav.to} className="font-semibold text-[17px]">
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center mx-11">
        <p
          onClick={showCategory}
          className="text-gray-900 font-semibold text-xl"
        >
          Categories
        </p>
        <RiArrowDropDownLine
          className={`h-8 w-8 transform transition-transform duration-15 active:outline-none ${
            Show ? "rotate-180" : ""
          }`}
        />
      </div>
      {Show && (
        <div className="mx-16 font-semibold text-gray-500">
          {categories.map((category, index) => (
            <p key={index}> - {category}</p>
          ))}
        </div>
      )}
    </div>
  );
}
