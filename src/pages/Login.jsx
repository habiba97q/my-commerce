import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: [],
  });

  const validate = () => {
    let temp = { email: "", password: [] };

    // Email rules
    if (!email) {
      temp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      temp.email = "Enter a valid email";
    }

    // Password rules
    if (!password) {
      temp.password.push("Password is required");
    } else {
      if (password.length < 6) temp.password.push("At least 6 characters");
      if (!/[A-Z]/.test(password)) temp.password.push("Must include one uppercase letter");
      if (!/[a-z]/.test(password)) temp.password.push("Must include one lowercase letter");
      if (!/[0-9]/.test(password)) temp.password.push("Must include one number");
      if (!/[!@#$%^&*]/.test(password))
        temp.password.push("Must include one special character (!@#$%^&*)");
    }

    setErrors(temp);
    return temp.email === "" && temp.password.length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful");
    }
  };

  return (
    <div className="flex justify-center items-center  bg-base-200 py-20">
      <div className="w-full max-w-sm p-6 bg-base-100 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin}>

         
          <label className="form-control w-full mb-4">
            <span className="label-text font-medium">Email</span>
            <input
              type="text"
              className="input input-bordered w-full focus:outline-none focus:ring-0
"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </label>

          <label className="form-control w-full mb-4">
            <span className="label-text font-medium">Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10 focus:outline-none focus:ring-0
"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3  z-50"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> :<FaRegEyeSlash /> }
              </button>
            </div>

            
            {errors.password.length > 0 && (
              <ul className="text-red-500 text-sm mt-1 list-disc ml-5">
                {errors.password.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            )}
          </label>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
