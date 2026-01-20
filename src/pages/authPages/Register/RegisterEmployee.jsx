import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const RegisterEmployee = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { registerUser, updateUserProfile } = useAuth();
  const [passType, setPassType] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    try {
      // 1️⃣ Firebase Registration
      const result = await registerUser(data.email, data.password);
      if (!result?.user) throw new Error("Firebase registration failed");

      // 2️⃣ Firebase Profile Update
      await updateUserProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });

      // 3️⃣ MongoDB Payload
      const employeeInfo = {
        name: data.name,
        email: data.email,
        role: "employee",
        photo: data.photoURL,
        dateOfBirth: data.dateOfBirth,
        createdAt: new Date(),
      };

      // 4️⃣ MongoDB Save
      const res = await axios.post("/register/employee", employeeInfo);

      if (!res.data?.token) throw new Error("MongoDB user save failed");

      toast.success("Welcome to AssetVerse 🎉");
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Employee Register Error:", error);
      toast.error(
        error?.response?.data?.message ||
        error.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <Helmet>
        <title>Register | AssetVerse</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md shadow-lg shadow-neutral rounded-xl p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center">
          Register as Employee
        </h2>

        <p className="text-center mt-1">
          or Register as{" "}
          <Link to="/register-hr" className="link text-secondary">
            HR
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="card-body px-0"
        >
          <fieldset className="fieldset flex flex-col gap-3">
            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input"
                placeholder="Full Name"
              />
              {errors.name && (
                <p className="font-medium text-error">Name is Required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="font-medium text-error">Email is Required</p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">Photo URL</label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              {errors.photoURL && (
                <p className="font-medium text-error">Photo URL is Required</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                {...register("password", { required: true })}
                type={passType ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-10 text-xl cursor-pointer"
                onClick={() => setPassType(!passType)}
              >
                {passType ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password && (
                <p className="font-medium text-error">Password is Required</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="label">Date of Birth</label>
              <input
                {...register("dateOfBirth", { required: true })}
                type="date"
                className="input"
              />
              {errors.dateOfBirth && (
                <p className="font-medium text-error">Date is Required</p>
              )}
            </div>

            <button className="btn btn-primary w-full mt-2">Register</button>

            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="link text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterEmployee;
