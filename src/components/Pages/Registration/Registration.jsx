import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        localStorage.removeItem("auth");
        const authData = {
          user: response?.data?.user,
          token: response?.data?.token?.accessToken,
          refreshToken: response?.data?.token?.refreshToken,
        };
        localStorage.setItem("auth", JSON.stringify(authData));
        setAuth(authData);
        toast.success("Successfully registration", {
          position: "top-right",
          autoClose: 5000,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error(`${error?.response?.data?.message} please try again!`, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit(registerFormSubmit)} autoComplete="off">
            <div className="mb-6">
              <label htmlFor="firstName" className="block mb-2">
                First Name
              </label>
              <input
                {...register("firstName", { required: "First Name is required" })}
                type="text"
                id="firstName"
                name="firstName"
                className={`w-full p-3 bg-[#030317] border  rounded-md focus:outline-none focus:border-indigo-500 ${
                  errors?.firstName?.message ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors?.firstName?.message && (
                <h1 className="text-red-500 pt-1">{errors?.firstName?.message}</h1>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block mb-2">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last Name is requried" })}
                type="text"
                id="lastName"
                name="lastName"
                className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none focus:border-indigo-500 ${
                  errors?.lastName?.message ? "border-red-500" : " border-white/20"
                }`}
              />
              {errors?.lastName?.message && (
                <h1 className="text-red-500 pt-1">{errors?.lastName?.message}</h1>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                id="email"
                name="email"
                className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none focus:border-indigo-500 ${
                  errors?.email?.message ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors?.email?.message && (
                <h1 className="text-red-500 pt-1">{errors?.email?.message}</h1>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Your password must be at least 6 characters" },
                })}
                type="password"
                id="password"
                name="password"
                className={`w-full p-3 bg-[#030317] border  rounded-md focus:outline-none focus:border-indigo-500 ${
                  errors?.password?.message ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors?.password?.message && (
                <h1 className="text-red-500 pt-1">{errors?.password?.message}</h1>
              )}
            </div>
            <div className="mb-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                {loading ? "Loading..." : "Create Account"}
              </button>
            </div>
            <p className="text-center">
              Already have account?
              <Link to={"/login"} className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
