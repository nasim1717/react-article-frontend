import useTitle from "../../../hooks/useTitle";
import ProfileProvider from "../../../provider/ProfileProvider";
import Profile from "./Profile";

export default function ProfileMaincontent() {
  useTitle("Profile | Article");

  return (
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  );
}
