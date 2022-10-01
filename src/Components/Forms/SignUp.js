import React from "react";
import useForm from "./useForm";

const SignIn = () => {
  const [state, onChangeHandler, onSubmitHandler] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <input
        type="text"
        name="firstName"
        onChange={onChangeHandler}
        value={state.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={onChangeHandler}
        value={state.lastName}
      />
      <input
        type="email"
        name="email"
        onChange={onChangeHandler}
        value={state.email}
      />
      <input
        type="password"
        name="password"
        onChange={onChangeHandler}
        value={state.password}
      />
      <button onClick={onSubmitHandler}>Submit</button>
    </>
  );
};

export default SignIn;
