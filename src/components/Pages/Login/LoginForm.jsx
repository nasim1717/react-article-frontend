import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, data);
      if (response.status === 200) {
        localStorage.removeItem("auth");
        const authData = {
          user: response?.data?.user,
          token: response?.data?.token?.accessToken,
          refreshToken: response?.data?.token?.refreshToken,
        };
        console.log("loginuser-->", authData);
        localStorage.setItem("auth", JSON.stringify(authData));
        setAuth(authData);
        toast.success("Successfully login", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error(`${error?.response?.data?.error} please try again!`, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          id="email"
          name="email"
          className={`w-full p-3 bg-slate-400 border  rounded-md focus:outline-none focus:border-slate-600 ${
            errors?.email?.message ? "border-red-600" : "border-slate-500"
          }`}
        />
        {errors?.email?.message && <h1 className="text-red-500 pt-1">{errors?.email?.message}</h1>}
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
          className={`w-full p-3 bg-slate-400 border  rounded-md focus:outline-none focus:border-slate-600  ${
            errors?.password?.message ? "border-red-600" : "border-slate-500"
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
          className="w-full bg-slate-600 text-white p-3 rounded-md hover:bg-slate-700 transition-all duration-200"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
      <p className="text-center">
        Don&apos;t have an account?
        <Link to={"/register"} className="text-orange-700 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
