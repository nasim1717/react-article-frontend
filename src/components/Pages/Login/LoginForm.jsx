import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
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
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors?.email?.message && "border-red-600"
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
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500  ${
            errors?.password?.message && "border-red-600"
          }`}
        />
        {errors?.password?.message && (
          <h1 className="text-red-500 pt-1">{errors?.password?.message}</h1>
        )}
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don&apos;t have an account?
        <a href="./register.html" className="text-indigo-600 hover:underline">
          Register
        </a>
      </p>
    </form>
  );
}
