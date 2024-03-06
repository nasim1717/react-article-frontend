import EditIcon from "../../../assets/icons/edit.svg";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      {/* <!-- profile image --> */}
      <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
          {/* <!-- User's first name initial --> */}
          <span className="">S</span>
        </div>

        <button className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
          <img src={EditIcon} alt="Edit" />
        </button>
      </div>
      {/* <!-- name , email --> */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">Saad Hasan</h3>
        <p className="leading-[231%] lg:text-lg">saadhasan@gmail.com</p>
      </div>

      {/* <!-- bio --> */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            Sumit is an entrepreneurial visionary known for his exceptional performance and passion
            for technology and business. He established Analyzen in 2008 while he was a student at
            Bangladesh University of Engineering & Technology (BUET). Analyzen has since become a
            top-tier Web and Mobile Application Development firm and the first Digital and Social
            Media Marketing Agency in Bangladesh.
          </p>
        </div>
        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
        <button className="flex-center h-7 w-7 rounded-full">
          <img src={EditIcon} alt="Edit" />
        </button>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}
