import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Auth() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/v1/login", formData);
      
      if(res.data.success){
      console.log("res")
      navigate('/admin-panel');
      }
      setError(res.data.message);
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
    finally{
      setTimeout(() => {
        setError("");
      }, 2000);
    }



    // Reset the form
    setFormData({
      email: "",
      password: "",
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-300">
      <div className="bg-white mt-10 p-8 h-fit rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-center font-semibold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-700"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="flex justify-between" >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-700"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="btn w-20"
              >
                {showPassword ? (
                  "Hide"
                ) : (
                  "Show"
                )}
              </button>
            </div>


          </div>
          <div className="mb-4">
            <button
              type="submit"
              className={`btn bg-gray-700 text-white ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
                }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
