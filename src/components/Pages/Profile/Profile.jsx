import ProfileInfo from "./ProfileInfo";
import YourProfileBlogs from "./YourProfileBlogs";

export default function Profile() {
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo />
        <YourProfileBlogs />
      </div>
    </main>
  );
}
