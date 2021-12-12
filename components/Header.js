import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinksList from "./HeaderComps/NavLinksList.js";
import SearchBox from "./HeaderComps/SearchBox.js";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import MobMenu from "./MobMenu.js";
import MobSearch from "./MobSearch.js";

export default function Header({ categories }) {
  const [showMenu, setshowMenu] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  function changeShowMenu() {
    setshowMenu(!showMenu);
  }

  function toggleSearch() {
    setshowSearch(!showSearch);
  }

  return (
    <div className="flex justify-between items-center h-14 md:h-20 bg-gray-50 border-b border-gray-200 px-6 md:px-14 font-macan">
      <div className="flex items-center md:space-x-4 justify-between w-full md:w-1/2">
        <div onClick={changeShowMenu}>
          <HiMenuAlt1 className="md:hidden w-7 h-7" />
        </div>
        <div className="relative w-36 h-10">
          <Image
            src="/websiteSVGname.svg"
            alt=""
            layout="fill"
            className="object-cover"
          />
        </div>
        <div>
          <BiSearch onClick={toggleSearch} className="md:hidden w-6 h-6" />
        </div>
        <span className="hidden md:block">
          <SearchBox />
        </span>
      </div>
      <div className="md:flex items-center justify-between w-2/5 hidden">
        <NavLinksList />
        <button className="px-3.5 py-1.5 border-b text-sm text-gray-600 font-medium border border-gray-400 hover:text-gray-200 hover:bg-gray-500 rounded duration-500">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
      {showMenu && (
        <div
          onClick={changeShowMenu}
          className="fixed inset-0 bg-gray-50 opacity-50"
        ></div>
      )}
      <MobMenu showMenu={showMenu} categories={categories} />
      <MobSearch showSearch={showSearch} setshowSearch={setshowSearch} />
    </div>
  );
}
