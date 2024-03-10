import ProfileProvider from "../../../provider/ProfileProvider";
import Profile from "./Profile";

export default function ProfileMaincontent() {
  return (
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  );
}
