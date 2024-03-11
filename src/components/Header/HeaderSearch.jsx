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
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={SearchIcon} alt="Search" />
          <span>Search</span>
        </h1>
      </li>
      {searchActive && portl(<Search setSearchActive={setSearchActive} />)}
    </>
  );
}
