import { Route, Routes } from "react-router-dom";
import CreateBlog from "./components/Pages/CreateBlog/CreateBlog";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Main from "./components/Pages/Main/Main";
import Profile from "./components/Pages/Profile/Profile";
import Registration from "./components/Pages/Registration/Registration";
import SingleBlogContent from "./components/Pages/SingleBlog/SingleBlogContent";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="single-blog" element={<SingleBlogContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
