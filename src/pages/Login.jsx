import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧩 Call login() from context
    const result = login(username.trim(), password.trim());

    if (result.success) {
      navigate("/app"); // Redirect to app layout
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-full h-full md:h-[776px] bg-white overflow-hidden flex">
        {/* ---------------------- SIGN IN ---------------------- */}
        <div
          className={`absolute pb-3 pt-3 bottom-0 md:top-0 left-0 w-full md:w-1/2 md:h-full flex flex-col items-center justify-center bg-white px-8 transition-all duration-700 ease-in-out ${
            isSignUp
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <img
            src="/logo1.png"
            alt=""
            className="flex items-center justify-center w-[200px] mx-auto h-[125px]"
          />
          <h2 className="text-xl font-bold font-serif text-[#023e8a] mb-2">
            Welcome Back!
          </h2>
          <p className="text-[#023e8a] text-sm mb-4">
            Please enter your login credentials.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[300px]">
            {/* Username */}
            <div className="relative mb-2">
              <Mail className="absolute left-3 top-1 text-gray-400" size={17} />
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-0.7 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-50"
              />
            </div>

            {/* Password */}
            <div className="relative mb-3">
              <Lock className="absolute left-3 top-1 text-gray-400" size={17} />
              <input
                type={showPasswordSignIn ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-0.7 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-50"
              />
              <div
                onClick={() => setShowPasswordSignIn(!showPasswordSignIn)}
                className="absolute right-3 top-1 cursor-pointer text-gray-400"
              >
                {showPasswordSignIn ? <EyeOff size={17} /> : <Eye size={17} />}
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
            )}

            <div className="flex justify-between">
              <div className="flex text-black text-center justify-start text-[12px]">
                <input
                  type="checkbox"
                  className="pl-10 mt-0.5 pr-3 mb-4 bg-gray-50 border border-gray-200 rounded-md focus:outline-none"
                />
                <p className="ml-1">Remember me</p>
              </div>
              <p className="text-[12px] text-center text-black mb-4 cursor-pointer hover:underline">
                Forgot password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-1 bg-gradient-to-r from-[#03045e] to-[#0077b6] text-white text-sm rounded-xl font-semibold hover:bg-white transition"
            >
              Sign In
            </button>

            <div className="flex items-center justify-center text-black mt-1">
              <p className="text-[12px] font-poppins mt-1.5">
                Don't have an account?
              </p>
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-[12px] ml-1 mt-1 font-semibold transition hover:text-[#023e8a]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* ---------------------- SIGN UP ---------------------- */}
        <div
          className={`absolute pb-3 pt-3 bottom-0 md:top-0 right-0 w-full md:w-1/2 md:h-full flex flex-col items-center justify-center bg-white px-8 transition-all duration-700 ease-in-out ${
            isSignUp
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <img
            src="/logo1.png"
            alt=""
            className="flex items-center justify-center w-[150px] h-[120px]"
          />
          <h2 className="text-xl font-serif font-bold text-[#023e8a] mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-[300px]">
            <div className="relative mb-2">
              <User className="absolute left-3 top-1 text-gray-400" size={17} />
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full pl-10 pr-3 py-0.7 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-50"
              />
            </div>

            <div className="relative mb-2">
              <Mail className="absolute left-3 top-1 text-gray-400" size={17} />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-3 py-0.7 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-50"
              />
            </div>

            <div className="relative mb-3">
              <Lock className="absolute left-3 top-1 text-gray-400" size={17} />
              <input
                type={showPasswordSignUp ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full pl-10 pr-10 py-0.7 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-50"
              />
              <div
                onClick={() => setShowPasswordSignUp(!showPasswordSignUp)}
                className="absolute right-3 top-1 cursor-pointer text-gray-400"
              >
                {showPasswordSignUp ? <EyeOff size={17} /> : <Eye size={17} />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-1 mt-3 bg-gradient-to-r from-[#03045e] to-[#0077b6] text-white rounded-xl text-sm font-semibold transition"
            >
              Sign Up
            </button>

            <div className="flex items-center text-black justify-center mt-1">
              <p className="text-[12px] font-poppins mt-1.5">
                Already have an account?
              </p>
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="hover:text-[#023e8a] text-[12px] font-semibold ml-1 mt-1 transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* ---------------------- IMAGE PANEL ---------------------- */}
        <div
          className={`absolute top-0 w-full md:w-1/2 h-30% md:h-full bg-white text-black flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            isSignUp ? "left-0" : "left-1/2"
          }`}
        >
          {isSignUp ? (
            <img src="./Signup.jpg" alt="" className="w-full h-full" />
          ) : (
            <img src="./Signin.jpg" alt="" className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
}
