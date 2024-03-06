import CommentIcon from "../../../assets/icons/comment.svg";
import HeartIcon from "../../../assets/icons/heart.svg";
import LikeIcon from "../../../assets/icons/like.svg";

export default function Floating() {
  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={LikeIcon} alt="like" />
          <span>10</span>
        </li>
        <li>
          <img src={HeartIcon} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>3</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
