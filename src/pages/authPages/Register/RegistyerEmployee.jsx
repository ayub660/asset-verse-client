import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";

const RegisterEmployee = () => {
   const axios = useAxios();
   const { registerUser, updateUserProfile } = useAuth();
   const [passType, setPassType] = useState(false);

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

   const handleRegistration = async (data) => {
     try {
       data.role = "hr";
       data.packageLimit = 5;
       data.currentEmployees = 0;
       data.subscription = "basic";

       // 1️⃣ Firebase auth
       await registerUser(data.email, data.password);

       // 2️⃣ Update Firebase profile (ONLY name + photo)
       await updateUserProfile({
         displayName: data.name,
         photoURL: data.companyLogo,
       });

       // 3️⃣ Save HR info to MongoDB
       const hrInfo = {
         name: data.name,
         email: data.email,
         role: "hr",
         companyName: data.companyName,
         companyLogo: data.companyLogo,
         dateOfBirth: data.dateOfBirth,
         packageLimit: 5,
         currentEmployees: 0,
         subscription: "basic",
         createdAt: new Date(),
       };

       const res = await axios.post("/users", hrInfo);
       console.log("User saved:", res.data);
     } catch (error) {
       console.error(error);
     }
   };


  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <Helmet>
        <title>Register | AssetVerse</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md shadow-lg shadow-neutral rounded-xl p-6">
        <h2>Register as Employee</h2>
        <p className="text-center mt-1">
          or Register as{" "}
          <Link to="/register-hr" className="link text-secondary">
            HR
          </Link>
        </p>

        <form onSubmit={handleSubmit(handleRegistration)} className="card-body px-0">
          <fieldset className="fieldset flex flex-col gap-3">
            <label {...register("name")} className="label">
              Name
            </label>
            <input
              type="text"
              className="input outline-none border-primary w-full"
              placeholder="Full Name"
            />
            <label {...register("email")} className="label">
              Email
            </label>
            <input
              type="email"
              className="input outline-none border-primary w-full"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input outline-none border-primary w-full"
              placeholder="Password"
            />

            <button className="btn btn-primary w-full mt-2">Register</button>

            <p className="text-center">
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
