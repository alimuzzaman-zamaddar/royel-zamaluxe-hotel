import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";
import SocialLogin from "./SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result?.user;
        console.log("created user", user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LOGIN SUCCESSFUL",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="" style={{ backgroundImage: "url('https://i.ibb.co/tbnvt70/blackboard-among-mexican-food.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="w-[35%] mx-auto py-28">
        <div className="card py-10 bg-orange-50 text-black">
          <h1 className="text-center text-6xl font-bold font-serif">Please Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered text-black bg-slate-300"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>

              <div className="">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered w-[100%] text-black bg-slate-300"
                />
              </div>

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="md:px-8  bg-[#877a52] hover:bg-[#d3aa2f] rounded-lg duration-700 p-2 md:py-3 text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <span className="text-center">
            Already have an account
            <strong>
              <Link to="/register"> Register Fast </Link>
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
