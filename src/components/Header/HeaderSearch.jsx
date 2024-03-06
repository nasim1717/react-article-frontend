import SearchIcon from "../../assets/icons/search.svg";

export default function HeaderSearch() {
  return (
    <li>
      <a href="#" className="flex items-center gap-2 cursor-pointer">
        <img src={SearchIcon} alt="Search" />
        <span>Search</span>
      </a>
    </li>
  );
}
