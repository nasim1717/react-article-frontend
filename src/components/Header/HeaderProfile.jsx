export default function HeaderProfile() {
  return (
    <li className="flex items-center">
      {/* <!-- Circular Div with background color --> */}
      <div className="avater-img bg-orange-600 text-white">
        <span className="">S</span>
        {/* <!-- User's first name initial --> */}
      </div>

      {/* <!-- Logged-in user's name --> */}
      <a href="./profile.html">
        <span className="text-white ml-2">Saad Hasan</span>
      </a>
      {/* <!-- Profile Image --> */}
    </li>
  );
}
