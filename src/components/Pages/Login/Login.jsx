import useTitle from "../../../hooks/useTitle";
import LoginForm from "./LoginForm";

export default function Login() {
  useTitle("Login | Article");
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-slate-400 p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
