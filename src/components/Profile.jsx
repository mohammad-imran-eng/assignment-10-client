import { useContext } from "react";
import { AuthContext } from "../Providers/ContextProvider";
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const {loggedInUser} = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 p-8 shadow-lg text-white">
      {/* User Photo or Default Icon */}
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
        {loggedInUser?.photoURL ? (
          <img
            src={loggedInUser.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-full h-full text-gray-200" />
        )}
      </div>

      {/* Display Name */}
      <h2 className="text-2xl font-bold mb-2">
        {loggedInUser?.displayName || "Guest User"}
      </h2>

      {/* Email */}
      <p className="text-sm text-gray-200">
        {loggedInUser?.email || "No email available"}
      </p>

      {/* Edit Profile Button (Optional) */}
      <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Edit Profile
      </button>
    </div>
    );
};

export default Profile;