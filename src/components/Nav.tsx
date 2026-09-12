import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-text.png";
 
// navbar complited 

const Navbar = () => {
  return (
    <nav className="shadow sticky top-0">
          <div className="container py-5 mx-auto   bg-white">
      <div className="flex items-center justify-between">
        <FaBars className="md:hidden text-3xl cursor-pointer" />
        <div className="">
          <img src={logo} />
        </div>
          <ul className=" hidden md:flex  gap-7 ">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        <div>
          <button className="btn rounded-2xl">Sign In</button>
          <button className="btn btn-active rounded-2xl ml-3 bg-pink-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    </nav>

  );
};

export default Navbar;
