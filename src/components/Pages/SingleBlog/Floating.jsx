import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import CommentIcon from "../../../assets/icons/comment.svg";
import HartFilledIcon from "../../../assets/icons/heart-filled.svg";
import HeartIcon from "../../../assets/icons/heart.svg";
import LikeFilledIcon from "../../../assets/icons/like-filled.svg";
import LikeIcon from "../../../assets/icons/like.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useSingleBlog } from "../../../hooks/useSingleBlog";

export default function Floating() {
  const { blogId } = useParams();
  const { auth, setAuth } = useAuth();
  const { singleBlog, dispatch } = useSingleBlog();
  const { api } = useAxios();
  const [isFavourite, setIsFavourite] = useState(false);

  // get favourite api handle
  useEffect(() => {
    const fetchFavouriteBlogs = async () => {
      try {
        const response = await api.get(`/blogs/favourites`);
        if (response.status === 200) {
          const data = response?.data?.blogs;
          const isFavouriteFind = data?.find((favourite) => favourite?.id === blogId);
          if (isFavouriteFind) {
            setIsFavourite(true);
          } else {
            setIsFavourite(false);
          }
        }
      } catch (error) {
        setAuth({});
        localStorage.removeItem("auth");
      }
    };
    fetchFavouriteBlogs();
  }, []);

  const isLike = singleBlog?.likes?.find((like) => like?.id === auth?.user?.id);

  // like features implement
  const handleLike = async (id) => {
    if (auth?.user) {
      try {
        const response = await api.post(`/blogs/${id}/like`);
        if (response.status === 200) {
          const data = response?.data?.likes;
          dispatch({ type: actions.blogs.BLOG_LIKE, payload: { data } });
        }
      } catch (error) {
        localStorage.removeItem("auth");
        setAuth({});
        toast.warning("Login first then like", { autoClose: 3000 });
      }
    } else {
      toast.warning("Login first then like", { autoClose: 3000 });
    }
  };

  // fevourite features implement
  const handleHart = async (id) => {
    if (auth?.user) {
      try {
        const response = await api.patch(`/blogs/${id}/favourite`);
        if (response.status === 200) {
          setIsFavourite(response?.data?.isFavourite);
        }
      } catch (error) {
        localStorage.removeItem("auth");
        setAuth({});
        toast.warning("Login first then favourite", { autoClose: 3000 });
      }
    } else {
      toast.warning("Login first then favourite", { autoClose: 3000 });
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={() => handleLike(singleBlog?.id)}>
          <img src={isLike ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{singleBlog?.likes?.length > 0 && singleBlog?.likes?.length}</span>
        </li>
        <li onClick={() => handleHart(singleBlog?.id)}>
          <img src={isFavourite ? HartFilledIcon : HeartIcon} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{singleBlog?.comments?.length > 0 && singleBlog?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
