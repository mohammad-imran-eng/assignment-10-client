import React, { useContext } from 'react';
import { AuthContext } from './../Providers/ContextProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';
import Swal from 'sweetalert2';

const Register = () => {
 
    const {createUser} = useContext(AuthContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result=> {
      Swal.fire({
      title: "Registered!",
      text: "Registration Successful.",
      icon: "success"
    });
      form.reset();

      // post new user to the db
      const newUserData = {name,email,photoURL}
      fetch('https://assignment-10-server-sepia-two.vercel.app/users',{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      })
      .then(res=> res.json())
      .then(data=> console.log(data))
      
      updateProfile(auth.currentUser,{displayName:name,photoURL:photoURL})
      .then(()=> {
        console.log("");
      })
      .catch(error=> {
        console.log(error);
      })
    })
    .catch((error)=> {
      console.log(error);
    })

  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
          <p className='mt-2'>Already have an account. Please <Link to='/login' className="text-blue-600 underline">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
