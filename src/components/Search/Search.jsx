import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import { useAxios } from "../../hooks/useAxios";
import useDebounce from "../../hooks/useDebounce";
import SearchBlogCard from "./SearchBlogCard";

export default function Search({ setSearchActive }) {
  const [querayText, setQueryText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchHandle, setSearchHandle] = useState({ loading: false, error: false });
  const { api } = useAxios();

  const doSearchBlog = useDebounce((searchValue) => {
    setQueryText(searchValue);
  }, 500);

  useEffect(() => {
    const fetchSerach = async () => {
      try {
        setSearchHandle({ ...searchHandle, loading: true });
        const response = await api.get(`/search?q=${querayText}`);
        if (response.status === 200) {
          setSearchResult(response?.data?.data);
        }
        setSearchHandle({ ...searchHandle, loading: false, error: false });
      } catch (error) {
        setSearchHandle({ ...searchHandle, loading: false, error: true });
      }
    };
    fetchSerach();
  }, [querayText, api]);

  const handleSearch = (event) => {
    const value = event.target.value;
    doSearchBlog(value);
  };

  let content = null;
  if (searchHandle.loading) {
    content = <div className="text-slate-400 text-center">Loading...</div>;
  }
  if (!searchHandle.loading && searchHandle.error && querayText) {
    content = <div className="text-slate-400 text-center">{`"${querayText}" Blog Not Found!`}</div>;
  }
  if (!searchHandle.loading && searchHandle.error && !querayText) {
    content = (
      <div className="text-slate-400 text-center">{`Blog the search, input your text search field`}</div>
    );
  }
  if (!searchHandle.loading && !searchHandle.error && searchResult?.length > 0) {
    content = searchResult?.map((blog) => <SearchBlogCard key={blog?.id} blog={blog} />);
  }

  return (
    <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      {/* <!-- Search Container --> */}
      <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
        {/* <!-- Search --> */}
        <div>
          <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
            Search for Your Desire Blogs
          </h3>
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Start Typing to Search"
            className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
          />
        </div>

        {/* <!-- Search Result --> */}
        <div className="">
          <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
          <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
            {content}
          </div>
        </div>

        <h1 onClick={() => setSearchActive(false)}>
          <img
            src={CloseIcon}
            alt="Close"
            className="absolute right-2 top-2 cursor-pointer w-8 h-8"
          />
        </h1>
      </div>
    </section>
  );
}
