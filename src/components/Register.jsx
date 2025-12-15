import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const [message, setMessage] = useState("");
  const [registerUser, {isLoading}] = useRegisterUserMutation();
  const {register,handleSubmit,formState: { errors },} = useForm();
  const navigate = useNavigate();  


  const onSubmit = async (data) => {
    try{
      const response = await registerUser(data).unwrap();
      alert('Registration Successfull');
      navigate('/login');
    }catch(error){
      setMessage("Registration Failed, pleasr provide valid information");
    }
  }

  return (
    <section className="h-screen flex items-center justify-center p-2">
      <div className="shadow bg-white p-8 max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 max-w-sm pt-2"
        >
          <input
            type="text"
            placeholder="User Name"
            {...register("username", { required: true })}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {errors.username && (
            <span className="text-red-500">Username is required</span>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3 "
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />

          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          {message && <p className="text-red-500">{message}</p>}

          <button className="w-full mt-5 bg-primary hover:bg-primary/70 text-white font-medium py-3 rounded-md">
            Register
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-red-700 cursor-pointer px-1 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
