import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { viewIcon, viewOffIcon } from "../assets/svg-icons";
import { useMutation } from "react-query";
import { api, setToken } from "../lib/axios";
import { toast } from "../components/ui/use-toast";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    full_name: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState(""); // To manage password validation error

  const { isLoading, mutate: register } = useMutation(
    async () => {
      const res = await api.post("/api/auth/register", inputs);
      return res.data;
    },
    {
      onSuccess: (data) => {
        toast({
          title: "Success",
          description: data.message,
          variant: "success",
        });
        navigate("/login");
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      },
    }
  );

  // Password length validation function
  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const RegisterHandler = () => {
    if (!isPasswordValid(inputs.password)) {
      setPasswordError("Password must be at least 8 characters long.");
      return; // Prevent form submission
    }
    setPasswordError(""); // Clear error if password is valid
    register();
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold text-blue500">
              TRANSFORM
            </span>
            <span className="font-light text-gray-400 mb-8">
              Please enter your information.
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Full name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="full_name"
                id="full_name"
                onChange={(e) =>
                  setInputs((inputs) => ({
                    ...inputs,
                    full_name: e.target.value,
                  }))
                }
                value={inputs.full_name}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                onChange={(e) =>
                  setInputs((inputs) => ({
                    ...inputs,
                    username: e.target.value,
                  }))
                }
                value={inputs.username}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 pr-10 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setInputs((inputs) => ({
                      ...inputs,
                      password: e.target.value,
                    }))
                  }
                  value={inputs.password}
                />
                <img
                  src={showPassword ? viewIcon : viewOffIcon}
                  alt="icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                />
              </div>
              {passwordError && (
                <span className="text-red-500 text-sm mt-2">
                  {passwordError}
                </span>
              )}
            </div>
            <button
              className="w-full bg-blue500 text-white p-2 rounded-lg mb-6 hover:bg-blue300 hover:border hover:broder-gray-300"
              disabled={isLoading}
              onClick={RegisterHandler}
            >
              Sign up
            </button>
            <button className="w-full border border-gray-300 p-2 rounded-lg text-md mb-6 hover:bg-blue300 hover:text-white">
              <img
                src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                alt="img"
                className="w-6 h-6 inline mr-2"
              />
              Sign up with Google
            </button>
            <div className="text-center text-gray-400">
              Already a user?{" "}
              <span
                className="font-bold text-blue500 cursor-pointer hover-effect"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.pinimg.com/236x/8b/41/14/8b4114ad536c8ad65e3adfb43eb20535.jpg"
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
