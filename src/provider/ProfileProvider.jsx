import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialProfileState, profileReducer } from "../reducer/profileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialProfileState);

  return <ProfileContext.Provider value={{ state, dispatch }}>{children}</ProfileContext.Provider>;
}
