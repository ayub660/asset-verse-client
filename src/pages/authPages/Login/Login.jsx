import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const Login = () => {
  const axios=useAxios()
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [passType, setPassType] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      await loginUser(data.email, data.password);
          const result = await loginUser(data.email, data.password);

         const res = await axios.post("/jwt", {
           email: result.user.email,
         });

         localStorage.setItem("access-token", res.data.token);
      navigate("/"); // or role-based redirect later
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <Helmet>
        <title>Login | AssetVerse</title>
      </Helmet>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="card bg-base-100 w-full max-w-sm sm:max-w-md shadow-lg shadow-neutral rounded-xl p-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center">
          Login
        </h2>

        <div className="card-body px-0">
          <fieldset className="fieldset flex flex-col gap-3">
            {/* Email */}
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input outline-none border-primary w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-error text-sm">Email is required</p>
            )}

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                {...register("password", { required: true })}
                type={passType ? "text" : "password"}
                className="input outline-none border-primary w-full"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-xl"
                onClick={() => setPassType(!passType)}
              >
                {passType ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-error text-sm">Password is required</p>
            )}

            {/* Forgot password */}
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="link link-hover text-sm">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>

            {/* Register */}
            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="/register-employee" className="link text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Login;
