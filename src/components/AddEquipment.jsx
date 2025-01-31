import React, { useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AuthContext } from "../Providers/ContextProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  
  const {loggedInUser} = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const email = loggedInUser?.email;
    const data = {itemName,categoryName,photo,description,price,rating,customization,processingTime,stockStatus,email};

    fetch('https://assignment-10-server-sepia-two.vercel.app/equipment',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.insertedId){
        Swal.fire({
          title: "Equipment added successful!",
          icon: "success",
          draggable: true
        });
      }
    })
   
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-100 transform transition-all hover:shadow-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Add New Equipment</h2>
      <form onSubmit={handleAddEquipment} className="space-y-6">

        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
          <input
            type="text"
            name="itemName"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
          <input
            type="text"
            name="categoryName"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            rows="4"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Customization</label>
          <input
            type="text"
            name="customization"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
          <input
            type="text"
            name="stockStatus"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:scale-105"
          >
            <IoIosAddCircleOutline className="mr-2 text-xl" />
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;