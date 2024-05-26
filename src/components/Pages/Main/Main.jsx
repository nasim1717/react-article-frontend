import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Main() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />

      {location.pathname === "/register" || location.pathname === "/login" ? "" : <Footer />}
      <ToastContainer />
    </>
  );
}
