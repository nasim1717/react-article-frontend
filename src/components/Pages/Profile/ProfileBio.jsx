import { useState } from "react";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import CheckIcon from "../../../assets/icons/check.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";

export default function ProfileBio() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth, setAuth } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState(state.profileData?.bio);

  const handleEditBio = async () => {
    try {
      const response = await api.patch(`/profile`, { bio });
      if (response.status === 200) {
        dispatch({
          type: actions.profile.PROFILE_BIO_UPDATE,
          payload: { bio: response?.data?.user?.bio },
        });
        toast.success("Bio updated successfully");
      }
    } catch (error) {
      localStorage.removeItem("auth");
      setAuth({});
      toast.error("Something went wrong, please log in and try again");
    } finally {
      setEditMode(false);
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-500 lg:text-lg">{state.profileData?.bio}</p>
        ) : (
          <textarea
            className="p-2 bg-slate-400 text-white lg:text-lg rounded-md focus:border-none focus:outline-none"
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {!editMode && auth?.user?.id === state.profileData?.id ? (
        <button
          onClick={() => setEditMode(true)}
          className="flex justify-center items-center h-7 w-7 rounded-full bg-slate-600"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : auth?.user?.id === state.profileData?.id ? (
        <button onClick={handleEditBio} className="flex-center h-7 w-7 rounded-full bg-slate-600">
          <img src={CheckIcon} alt="Edit" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
