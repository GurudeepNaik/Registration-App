import React, { useState } from "react";
// import { useAPI } from "./Context";
import { useDispatch } from "react-redux";
import DisplayPosts from "./DisplayPosts";
import { patchUser, postUser } from "../Redux";
import "./style.css";
const Post = () => {
  const dispatch = useDispatch();
  // const { postData, patchData } = useAPI();
  const [isUpdate, setisUpdate] = useState(false);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    setInput((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    if (
      input.name === "" ||
      input.phone === "" ||
      input.email.includes("@") === false ||
      input.company === ""
    ) {
      window.alert("Please Fill The All The Inputs");
    } else {
      if (isUpdate) {
        e.preventDefault();
        // patchData(input);
        dispatch(patchUser(input));
        setisUpdate(false);
      } else {
        // postData(input);
        // setIsLoading(true);
        // console.log(input);
        dispatch(postUser(input));
      }
      setInput({
        name: "",
        phone: "",
        email: "",
        company: "",
      });
    }
  };
  return (
    <>
      <h1 className="heading">New User</h1>
      <div className="input">
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Mobile Number"
          id="num"
          name="phone"
          type="number"
          value={input.phone}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={input.email}
          onChange={handleChange}
          required={true}
        />
        <select value={input.company} onChange={handleChange} name="company">
          <option value="" disabled defaultValue>
            Company
          </option>
          <option value="infosys">Infosys</option>
          <option value="wipro">Wipro</option>
          <option value="tata">Tata</option>
          <option value="congnizant">Congnizant</option>
        </select>
        <button onClick={handleClick}>{isUpdate ? "Save" : "Submit"}</button>
      </div>
      <DisplayPosts data={setInput} isUpdate={setisUpdate} />
    </>
  );
};

export default Post;
