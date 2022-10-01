import React from "react";
// import { useAPI } from "./Context";
import Delete from "./Delete";
import { useEffect } from "react";
import { fetchUser } from "../Redux";
import { useSelector, useDispatch } from "react-redux";

const DisplayPosts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { users, isLoading } = useSelector((state) => ({
    users: state.getUser.users,
    isLoading: state.getUser.isLoading,
  }));
  console.log(users);
  // const isLoading = useSelector((state) => state.getUser.loading);
  // console.log(users);
  // console.log(isLoading);

  // const { users } = useAPI();
  const changeFocus = (e) => {
    props.data(() => ({
      id: e.id,
      name: e.name,
      phone: e.phone,
      email: e.email,
      company: e.company,
    }));
    props.isUpdate(true);
  };
  return (
    <div className="data_container">
      <h2 className="scnd">All Users</h2>
      <div className="scroll">
        <table>
          <thead>
            <tr className="Head">
              <th>Name</th>
              <th>Number</th>
              <th>E-Mail</th>
              <th>Company</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td>...Loading</td>
              </tr>
            ) : (
              users.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>{data.company}</td>
                    <td>
                      <button
                        onClick={() => changeFocus(data)}
                        className="edit"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <Delete
                        data={data.id}
                        uderData={props.userData}
                        key={i + 1}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayPosts;
