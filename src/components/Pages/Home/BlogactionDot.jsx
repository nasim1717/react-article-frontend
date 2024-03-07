import ThredotsIcon from "../../../assets/icons/3dots.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";

export default function BlogActionDot({ authorId }) {
  return (
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
  );
}
