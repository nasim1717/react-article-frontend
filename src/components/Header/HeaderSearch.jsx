import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { usePortal } from "../../hooks/usePortal";
import Search from "../Search/Search";

export default function HeaderSearch() {
  const [searchActive, setSearchActive] = useState(false);
  const portl = usePortal("search-modal");

  return (
    <>
      <li>
        <h1
          onClick={() => setSearchActive(true)}
          className="flex items-center gap-2 cursor-pointer bg-slate-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-slate-700 transition-all duration-200"
        >
          <img src={SearchIcon} alt="Search" />
          <span>Search</span>
        </h1>
      </li>
      {searchActive && portl(<Search setSearchActive={setSearchActive} />)}
    </>
  );
}
