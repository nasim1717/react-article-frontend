import { useRef } from "react";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import EditIcon from "../../../assets/icons/edit.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";

export default function ProfileImage() {
  const { state, dispatch } = useProfile();
  const fileUploaderRef = useRef();
  const { api } = useAxios();
  const { setAuth, auth } = useAuth();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }
      const response = await api.post(`/profile/avatar`, formData);
      if (response.status === 200) {
        dispatch({
          type: actions.profile.PROFILE_IMGAGE_UPDATE,
          payload: { avatar: response?.data?.user?.avatar },
        });

        const getLocalStorageUser = localStorage.getItem("auth");
        const getLocalStorageUserConvertJson = JSON.parse(getLocalStorageUser);
        const updateLocalStorageUser = {
          ...getLocalStorageUserConvertJson,
          user: response?.data?.user,
        };
        localStorage.removeItem("auth");
        localStorage.setItem("auth", JSON.stringify(updateLocalStorageUser));
        setAuth(updateLocalStorageUser);

        toast.success("Profile image updated successfully");
        fileUploaderRef.current.removeEventListener("change", updateImageDisplay);
      }
    } catch (error) {
      localStorage.removeItem("auth");
      setAuth({});
      toast.error("Something went wrong, please log in and try again");
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {state.profileData?.avatar ? (
          <img
            className="rounded-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
              state.profileData?.avatar
            }`}
            alt="avatar"
          />
        ) : (
          <span className="capitalize">{state.profileData?.firstName?.charAt(0)}</span>
        )}
      </div>

      <input id="file" type="file" accept="image/*" ref={fileUploaderRef} hidden />
      {auth?.user?.id === state?.profileData?.id && (
        <button
          className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          onClick={handleImageUpload}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      )}
    </div>
  );
}
