import React, { useContext, useEffect } from "react";
import Board from "../styled-components/board.styled";
import styled from "styled-components";
import Footer from "./footer";
import { useForm } from "react-hook-form";
import { Context } from "../context";

function Info() {
  const { setValid } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  useEffect(() => {
    const reset = () => {
      setValid(false);
    };
    reset();
  }, []);

  const onSubmit = (data) => {
    if (
      data.name != undefined &&
      data.address != undefined &&
      data.number != undefined
    ) {
      setValid(true);
    }
  };

  const type = "submit";

  return (
    <Board>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4>Name</h4>
          <input
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: { value: true, message: "Can’t be empty" },
            })}
            style={
              errors.name != undefined
                ? { border: "1px solid #EA5555" }
                : { border: "" }
            }
          ></input>
          {errors.name?.message && (
            <span style={{ right: "20px", top: "35px" }}>Can’t be empty</span>
          )}
        </div>
        <div>
          <h4>Email Address</h4>
          <input
            placeholder="e.g. stephenking@.com"
            {...register("address", {
              required: { value: true, message: "Can’t be empty" },
            })}
            style={
              errors.address != undefined
                ? { border: "1px solid #EA5555" }
                : { border: "" }
            }
          ></input>
          {errors.address?.message && (
            <span style={{ right: "20px", top: "35px" }}>Can’t be empty</span>
          )}
        </div>
        <div>
          <h4>Phone Number</h4>
          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            {...register("number", {
              required: { value: true, message: "Can’t be empty" },
            })}
            style={
              errors.number != undefined
                ? { border: "1px solid #EA5555" }
                : { border: "" }
            }
          ></input>
          {errors.number?.message && (
            <span style={{ right: "20px", top: "35px" }}>Can’t be empty</span>
          )}
        </div>
        <Footer type={type} />
      </Form>
    </Board>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
  }
  h4 {
    color: #022959;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d6d9e6;
    padding: 0 10px;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  span {
    color: red;
    position: absolute;
  }
`;

export default Info;
