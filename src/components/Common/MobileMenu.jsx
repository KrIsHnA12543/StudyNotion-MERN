import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // if using React Router

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user=useSelector((state)=>state.profile.user);

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <button
        className="mr-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 rounded-xl bg-richblack-800 shadow-lg border border-richblack-700">
          <ul className="flex flex-col py-2 text-richblack-25">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
                
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/my-profile"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
                
              <Link
                to="/signup"
                className="block px-4 py-2 hover:bg-richblack-700"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
