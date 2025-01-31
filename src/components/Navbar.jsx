import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Providers/ContextProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { loggedInUser, signOutUser, setLoggedInUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("// Sign-out successful.");
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-gray-800  p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Website Name */}
        <Link to="/" className="text-white text-3xl font-semibold tracking-wide">
        EquiSports
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sportsEquipment" className="hover:text-gray-200 transition-colors">
              All Sports Equipment
            </Link>
          </li>
          <li>
            <Link to="/addEquipment" className="hover:text-gray-200 transition-colors">
              Add Equipment
            </Link>
          </li>
          <li>
            <Link to="/myEquipment" className="hover:text-gray-200 transition-colors">
              My Equipment List
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-200 transition-colors mr-10">
              Profile
            </Link>
          </li>
          {loggedInUser ? (
            <li className="flex items-center space-x-2 border py-1 px-2 rounded-lg">
              <img
                title={loggedInUser.displayName}
                className="w-8 h-8 rounded-full"
                src={loggedInUser.photoURL}
                alt="User Avatar"
              />
              <button
                onClick={handleSignOut}
                className=" hover:text-gray-200 transition-colors"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="hover:text-gray-200 transition-colors">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white flex flex-col items-center py-6 space-y-6 transition-all duration-300">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sports-equipment"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              All Sports Equipment
            </Link>
          </li>
          <li>
            <Link
              to="/add-equipment"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Add Equipment
            </Link>
          </li>
          <li>
            <Link
              to="/my-equipment"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              My Equipment List
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
