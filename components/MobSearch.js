import SearchBox from "./HeaderComps/SearchBox";
import { AiOutlineClose } from "react-icons/ai";

export default function MobSearch({ showSearch, setshowSearch }) {
  function ToggleShowSearch() {
    setshowSearch(!showSearch);
  }
  return (
    <div
      className={`fixed flex inset-0 z-10 transition-transform bg-gray-50 delay-150 pt-4 ${
        !showSearch ? "translate-x-full" : ""
      }`}
    >
      <SearchBox />
      <span onClick={ToggleShowSearch}>
        <AiOutlineClose className="w-8 h-8 mx-0.5" />
      </span>
    </div>
  );
}
