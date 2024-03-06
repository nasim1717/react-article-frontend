import ReactRoadMapThumnail from "../../../assets/blogs/React-Roadmap.jpg";
import ThredotsIcon from "../../../assets/icons/3dots.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";

export default function BlogContents() {
  return (
    <div className="space-y-3 md:col-span-5">
      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2 relative">
          <a href="./single-blog.html">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              <a href="./single-blog.html">React Roadmap in 2024</a>
            </h3>
          </a>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>

          {/* <!-- action dot --> */}
          <div className="absolute right-0 top-0">
            <button>
              <img src={ThredotsIcon} alt="3dots of Action" />
            </button>

            {/* <!-- Action Menus Popup --> */}
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          </div>
          {/* <!-- action dot ends --> */}
        </div>
      </div>
      {/* <!-- Blog Card End --> */}

      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">React Fetch API</a>
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Card End --> */}

      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            Style your components with TailwindCSS
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Card End --> */}

      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2">
          <a href="./single-blog.html">
            <h3 className="text-slate-300 text-xl lg:text-2xl">React Roadmap in 2024</h3>
          </a>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Card End --> */}

      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">React Fetch API</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Card End --> */}

      {/* <!-- Blog Card Start --> */}
      <div className="blog-card">
        <img className="blog-thumb" src={ReactRoadMapThumnail} alt="" />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            Style your components with TailwindCSS
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
            dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
          </p>

          {/* <!-- Meta Informations --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">Saad Hasan</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>100 Likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Card End --> */}
    </div>
  );
}
