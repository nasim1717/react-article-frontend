import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../../../actions";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";
import ProfileInfo from "./ProfileInfo";
import YourProfileBlogs from "./YourProfileBlogs";

export default function Profile() {
  const { authorId } = useParams();
  const { api } = useAxios();
  const { state, dispatch } = useProfile();
  const { setAuth } = useAuth();

  useEffect(() => {
    const fetchProfileData = async () => {
      dispatch({ type: actions.profile.PROFILE_DATA_FETCHING });
      try {
        const response = await api.get(`/profile/${authorId}`);
        if (response.status === 200) {
          dispatch({
            type: actions.profile.PROFILE_DATA_FETCHED,
            payload: { data: response?.data },
          });
        }
      } catch (error) {
        dispatch({ type: actions.profile.PROFILE_DATA_ERROR });
        localStorage.removeItem("auth");
        setAuth({});
      }
    };
    fetchProfileData();
  }, [authorId]);

  let content = null;
  if (state.loading && !state.error) {
    content = <div className="text-slate-400 font-medium text-center">Loading...</div>;
  }
  if (!state.loading && state.error) {
    content = (
      <div className="text-slate-400 font-medium text-center">
        Something went wrong, please log in and try again
      </div>
    );
  }
  if (!state.loading && !state.error) {
    content = (
      <>
        <ProfileInfo />
        <YourProfileBlogs />
      </>
    );
  }

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">{content}</div>
    </main>
  );
}
