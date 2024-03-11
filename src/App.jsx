import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CreateBlog from "./components/Pages/CreateBlog/CreateBlog";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Main from "./components/Pages/Main/Main";
import ProfileMaincontent from "./components/Pages/Profile/ProfileMainContent";
import Registration from "./components/Pages/Registration/Registration";
import SingleBlogMainContent from "./components/Pages/SingleBlog/SingleBlogMainContent";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authCheck = useAuthCheck();
  if (!authCheck) {
    return (
      <div className="text-slate-400 font-medium text-center my-auto text-xl">Loading....</div>
    );
  } else {
    return (
      <>
        <Routes>
          <Route>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:authorId" element={<ProfileMaincontent />} />
              <Route
                path="/create-blog"
                element={
                  <PrivateRoute>
                    <CreateBlog />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:blogId"
                element={
                  <PrivateRoute>
                    <CreateBlog />
                  </PrivateRoute>
                }
              />
              <Route path="/blog/:blogId" element={<SingleBlogMainContent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Route>
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
