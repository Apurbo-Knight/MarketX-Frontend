import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      const { token, user } = response;

      // ✅ FIXED LINE
      dispatch(setUser({ ...user, token }));

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center p-2">
      <div className="shadow bg-white p-8 max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pt-6">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-gray-100 px-5 py-3"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full bg-gray-100 px-5 py-3"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}

          {message && <p className="text-red-500">{message}</p>}

          <button className="w-full bg-primary text-white py-3 rounded-md">
            Login
          </button>
        </form>

        <p className="mt-5 text-sm text-center">
          Don’t have an account?
          <Link to="/register" className="text-red-700 underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
