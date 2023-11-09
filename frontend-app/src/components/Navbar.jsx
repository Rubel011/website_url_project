import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

export const navLinks = [
  {
    id: "/",
    title: "HOME",
  },
  // {
  //   id: "/categories",
  //   title: "CATEGORIES",
  // },
  // {
  //   id: "/product",
  //   title: "PRODUCT",
  // },
];

const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  const changeToggle = () => {
    setToggle(!toggle);
  };
  const logout = () => {
    localStorage.removeItem("access_token");
    setAccessToken(null);
  };

  return (
    <nav className="w-full flex justify-between items-center px-5 bg-slate-500">
      {/* Logo */}
      <Link to="/">
        <img
          src="https://minimalist-e-commerce.vercel.app/static/media/newlogo2.913a6896d5b7d39d8bf6.png"
          className=" w-20"
          alt=""
        />
      </Link>

      <ul className="flex gap-4">
        {navLinks.map((e, ind) => (
          <Link to={e.id} key={ind}>
            <li className="text-white hover:text-blue-500">{e.title}</li>
          </Link>
        ))}
      </ul>
      {accessToken ? (
        <button onClick={logout} className=" bg-red-50 hover:bg-blue-700 flex text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
      ) : (
        <Link to="/login" className="loginBtn">
          <button className="bg-blue-500 hover:bg-blue-700 flex text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
      <div className="toggleBtn" onClick={changeToggle}>
        {toggle ? (
          <AiOutlineClose size={40} color="white" />
        ) : (
          <AiOutlineMenu size={40} color="white" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
