import { useSingleBlog } from "../../../hooks/useSingleBlog";
import { getFormateDate } from "../../../utils/getFormateDate";

export default function SingleBlog() {
  const { singleBlog } = useSingleBlog();

  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{singleBlog?.title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img">
              {singleBlog?.author?.avatar ? (
                <img
                  className="rounded-full"
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                    singleBlog?.author?.avatar
                  }`}
                  alt=""
                />
              ) : (
                <span className="bg-indigo-600 text-white capitalize">
                  {singleBlog?.author?.firstName.charAt(0)}
                </span>
              )}
            </div>
            <h5 className="text-slate-500 text-sm">
              {singleBlog?.author.firstName + " " + singleBlog?.author?.lastName}
            </h5>
          </div>
          <span className="text-sm text-slate-700 dot">
            {getFormateDate(singleBlog?.createdAt)}
          </span>
          <span className="text-sm text-slate-700 dot">{singleBlog?.likes?.length} Likes</span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${singleBlog?.thumbnail}`}
          alt="thumbnail"
        />

        <ul className="tags">
          {singleBlog?.tags.split(",").map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {singleBlog?.content}
        </div>
      </div>
    </section>
  );
}
