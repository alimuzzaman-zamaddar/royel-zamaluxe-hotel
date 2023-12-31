import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {


    
    createUser(data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "REGISTRATION SUCCESSFUL",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  };

  return (
    <div className="" style={{ backgroundImage: "url('https://i.ibb.co/tbnvt70/blackboard-among-mexican-food.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="w-[35%] mx-auto py-10">
        <div className="card py-10 bg-orange-50 text-black">
          <h1 className="text-center text-6xl font-bold font-serif">
            Please Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered bg-slate-300"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered text-black"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                })}
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase letter, one lowercase letter,
                  one number, and one special character.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="md:px-8  bg-[#877a52] hover:bg-[#d3aa2f] rounded-lg duration-700 p-2 md:py-3 text-white"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <span className="text-center ">
            Already have an account?
            <strong>
              <Link to="/login">Please Login</Link>
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
