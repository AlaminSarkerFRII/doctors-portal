import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  // form set
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //use query for load

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className=" my-10">
      <h2>Add A Doctors</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl">
          <div className="form-control w-full max-w-xs ">
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
              <span className="label-text">specialty</span>
            </label>

            <select
              {...register("specialty")}
              className="select w-full input-bordered max-w-xs"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is required",
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

          <input
            className="btn w-full max-w-xs mb-6"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
