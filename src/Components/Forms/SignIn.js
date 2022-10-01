import React from "react";
import useForm from "./useForm";
const SignIn = () => {
  const [state, onChangeHandler, onSubmitHandler] = useForm({
    name: "",
    password: "",
  });

  return (
    <>
      <input
        type="text"
        name="username"
        onChange={onChangeHandler}
        value={state.name}
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
