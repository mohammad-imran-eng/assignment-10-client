import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaTshirt,
  FaClock,
  FaCheckCircle,
  FaEnvelope,
  FaSpinner,
  FaDatabase,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from './../Providers/ContextProvider';

const MyEquipment = () => {

    const {loggedInUser,loading,setLoading} = useContext(AuthContext);

    const [equipments, setEquipment] = useState([]);
      useEffect(()=> {
        fetch(`https://assignment-10-server-sepia-two.vercel.app/myequipment/${loggedInUser?.email}`)
        .then(res=> res.json())
        .then(data=> setEquipment(data))
        setLoading(false)
      },[!loading])

      
 

    const handleDeleteEquipment = (_id)=> {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-sepia-two.vercel.app/equipment/${_id}`,{
          method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
          if(data.deletedCount === 1){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remaining = equipments.filter(data=> data._id !== _id);
            setEquipment(remaining);
          }
        })
       
      }
    });
  }


  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-bold text-white">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
        My Equipment
      </span>
    </h1>
    <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6"/>
      {!loggedInUser && <div className="flex flex-col items-center justify-center p-6 text-gray-500">
      <FaDatabase className="text-6xl mb-2" />
      <h2 className="text-xl font-semibold">No data available</h2>
    </div>}
      {loading ? <div className="flex justify-center items-center h-[300px]">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
    </div> : <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
      {equipments.map((data) => (
        <div
          key={data._id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6"
        >
          <img
            className="w-full h-48 object-cover"
            src={data.photo}
            alt={data.itemName}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.itemName}</div>
            <p className="text-gray-700 text-base">{data.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaTshirt className="inline-block mr-1" /> {data.categoryName}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaStar className="inline-block mr-1" /> {data.rating} / 5
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaClock className="inline-block mr-1" /> {data.processingTime}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaCheckCircle className="inline-block mr-1" /> {data.stockStatus}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaEnvelope className="inline-block mr-1" /> {data.email}
            </span>
          </div>
          <div className="px-6 py-4">
            <span className="text-lg font-semibold">${data.price}</span>
            <span className="text-sm text-gray-600 ml-2">
              (Customization: {data.customization})
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={()=> handleDeleteEquipment(data._id)}
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Delete Equipment
            </button>
            <Link
              to={`/update/${data._id}`}
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Equipment
            </Link>
          </div>
        </div>
      ))}
    </div>}
    </div>
  );
};

export default MyEquipment;
