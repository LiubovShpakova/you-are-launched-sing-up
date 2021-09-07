import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import eye from "../../images/eye.svg";
export default function SingUpPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConPasswordShow, setIsConPasswordShow] = useState(false);
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
    const { radiovalues, email } = data;
    const info = radiovalues
      ? `You are ${radiovalues} and your email ${email}`
      : `Your email ${email}`;
    if (email) {
      const notify = () => toast.warn(info);
      reset();
      return notify();
    }
  };
  return (
    <>
      <div className="container">
        <a className="icon-logo" href={""}></a>
        <h1 className="title">Sign Up with email</h1>
        <form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
          <p className="input_title">Gender</p>
          <label className="input_item">
            <input
              type="radio"
              className="input_gender"
              name="radiovalues"
              value="Male"
              ref={register({ required: false })}
            />
            <div className="input_gender_item">
              <span className="input_gender_M"></span>
              <p className="input_gender_title">Male</p>
            </div>
          </label>
          <label className="input_item">
            <input
              type="radio"
              className="input_gender"
              name="radiovalues"
              value="Female"
              ref={register({ required: false })}
            />
            <div className="input_gender_item">
              <span className="input_gender_F"></span>
              <p className="input_gender_title">Female</p>
            </div>
          </label>
          <label className="input_itemO">
            <input
              type="radio"
              className="input_gender"
              name="radiovalues"
              value="Other"
              ref={register({ required: false })}
            />
            <div className="input_gender_item">
              <span className="input_gender_O"></span>
              <p className="input_gender_title">Other</p>
            </div>
          </label>
          <label className="form_label">
            <p className="input_title">E-mail</p>
            <input
              className={errors?.email ? "input_field_error" : "input_field"}
              type="email"
              name="email"
              placeholder="Enter e-mail"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="message_warning">This email field is required</p>
            )}
          </label>
          <label className="form_label">
            <p className="input_title">Create Password</p>
            <input
              className={
                errors?.password?.type ? "input_field_error" : "input_field"
              }
              type={isPasswordShow ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="message_warning"> This name field is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="message_warning">
                {" "}
                Password must have at least 6 characters
              </p>
            )}
            <div
              className={`${
                !isPasswordShow ? "password_eye_active" : "password_eye"
              }`}
              onClick={() => {
                setIsPasswordShow(!isPasswordShow);
              }}
            >
              <img src={eye} alt="eye" />
            </div>
          </label>
          <label className="form_label">
            <p className="input_title">Confirm Password</p>
            <input
              className={
                errors?.password_confirm?.type
                  ? "input_field_error"
                  : "input_field"
              }
              type={isConPasswordShow ? "text" : "password"}
              name="password_confirm"
              placeholder="Confirm password"
              ref={register({
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.password_confirm &&
              errors.password_confirm.type === "required" && (
                <p className="message_warning">
                  {" "}
                  This password confirm field is required
                </p>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <p className="message_warning">The passwords do not match</p>
              )}
            <div
              className={`${
                !isConPasswordShow ? "password_eye_active" : "password_eye"
              }`}
              onClick={() => {
                setIsConPasswordShow(!isConPasswordShow);
              }}
            >
              <img src={eye} alt="eye" />
            </div>
          </label>

          <button className="btn" type="submit">
            {" "}
            Sign Up
          </button>
        </form>
        <p className="registr">
          Already have an account?{" "}
          <a className="switch" href={""}>
            Log In
          </a>
        </p>
        <p className="registr">
          Review privacy and disclosures{" "}
          <a className="switch" href={""}>
            here
          </a>
        </p>
      </div>
    </>
  );
}
