import useTitle from "../../../hooks/useTitle";
import LoginForm from "./LoginForm";

export default function Login() {
  useTitle("Login | Learn with Sumit");
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
