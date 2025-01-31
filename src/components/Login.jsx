import { useContext } from "react";
import { AuthContext } from "../Providers/ContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
 
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then(result=> {
        Swal.fire({
        title: "Login successful!",
        icon: "success",
        draggable: true
      });
        form.reset();
       if(location.state){
        navigate(`${location.state}`)
       }
       if(!location.state){
        navigate('/')
       } 
    })
    .catch(error=> {
        console.log(error);
    })

  };

  return (
    <div className="max-w-md mx-auto my-20 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
        <p className='mt-2'>You don't have an account. Please <Link to='/register' className="text-blue-600 underline">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
