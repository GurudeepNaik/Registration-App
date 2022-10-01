import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Redux";
// import { useAPI } from "./Context";

const Delete = (props) => {
  // const { deleteData } = useAPI();
  const dispatch = useDispatch();
  const id = props.data;
  const handleClick = async () => {
    // deleteData(id);
    // setIsLoading(true);
    dispatch(deleteUser(id));
  };

  return (
    <button onClick={handleClick} className="del">
      Delete
    </button>
  );
};

export default Delete;
