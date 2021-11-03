import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placced Successfully.");
          clearTheCart();
          reset();
        }
      });
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
