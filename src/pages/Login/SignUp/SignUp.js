import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // form set
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // google sign in
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // create user with email password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // update profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let SignUpError;

  if (error || gError || updateError) {
    SignUpError = (
      <p className="text-red-200"> {error?.message || gError?.message}</p>
    );
  }
  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (user || gUser) {
    console.log(user, gUser);
  }

  // submit form

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/appointment");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters or longer",
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {SignUpError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              Already have an account?
              <Link to="/login" className="text-primary">
                Please Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <div className="text-center py-5">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              SignIn With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
