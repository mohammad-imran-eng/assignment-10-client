import { useState } from "react";
import { FaStar, FaEnvelope, FaClock, FaCheckCircle, FaTools } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";

const SportsEquipment = () => {
    const loadedData = useLoaderData();
    const [equipments,setEquipment] = useState(loadedData);
  return (

    <div>

        <h1 className="text-center my-10 text-4xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            All Equipment
          </span>
        </h1>
        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6"/>

    <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
      {
        equipments.map(data=> <div key={data._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
          <img className="w-full h-48 object-cover" src={data.photo} alt={data.itemName} />
          <div className="px-6 py-4">
            {/* <div className="font-bold text-xl mb-2">{data.itemName}</div> */}
            <p className="text-gray-700 text-base">
              {data.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.categoryName}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ₹{data.price}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaStar className="inline-block text-yellow-500" /> {data.rating}
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-sm">
              <FaClock className="inline-block text-gray-500" /> Processing Time: {data.processingTime}
            </p>
            <p className="text-gray-700 text-sm">
              <FaCheckCircle className="inline-block text-green-500" /> Stock Status: {data.stockStatus}
            </p>
          </div>
        </div>)
      }
    </div>

    </div>
   
  );
};

export default SportsEquipment;
