import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}
