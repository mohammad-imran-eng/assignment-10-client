import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadedData = useLoaderData();
  const {_id,categoryName,itemName,customization,description,email,photo,price,     processingTime,rating,stockStatus,} = loadedData;

  
  const handleUpdateEquipment = (e) => {
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
    const updateData = {itemName,categoryName,photo,description,price,rating,customization,processingTime,stockStatus,email}

    fetch(`https://assignment-10-server-sepia-two.vercel.app/equipment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount === 1){
          Swal.fire({
            title: "Updated!",
            text: "Your file has been Updated.",
            icon: "success"
          });
        }
      });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Update New Equipment
      </h2>
      <form onSubmit={handleUpdateEquipment} className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            defaultValue={itemName}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            defaultValue={categoryName}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* photo url */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            min="1"
            max="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            defaultValue={customization}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            defaultValue={processingTime}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock Status
          </label>
          <input
            type="text"
            name="stockStatus"
            defaultValue={stockStatus}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <IoIosAddCircleOutline className="mr-2" />
            UpdateEquipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
