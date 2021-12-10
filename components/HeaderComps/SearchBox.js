import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import SearchResults from "./SearchResults";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const { results } = await res.json();
        setSearchResults(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <div className="inline-block">
      <form className="flex items-center h-[35px] border border-gray-300 focus-within:border-green-500 hover:border-green-500 rounded">
        <GoSearch className="text-gray-500 m-2" />
        <input
          type="text"
          name="search"
          id="search"
          className="w-60 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Articles"
        />
        <button className="px-[18px] h-[2.15rem] text-sm font-semibold bg-green-500 text-gray-100">
          Search
        </button>
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
}
