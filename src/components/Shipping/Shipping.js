import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="shipping-form">
      <div>
        <h2 className="text-center">Shipping Adress</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your name"
            defaultValue={user.displayName}
            {...register("name")}
          />
          <input
            placeholder="Your email"
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your phone number"
            defaultValue=""
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your city"
            defaultValue=""
            {...register("city")}
          />
          <input
            placeholder="Your address"
            defaultValue=""
            {...register("address")}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
