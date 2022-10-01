import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  POST_REQUEST_STARTED,
  POST_REQUEST_SUCCEEDED,
  POST_REQUEST_FAILED,
  DELETE_REQUEST_STARTED,
  DELETE_REQUEST_SUCCEEDED,
  DELETE_REQUEST_FAILED,
  PATCH_REQUEST_STARTED,
  PATCH_REQUEST_SUCCEEDED,
  PATCH_REQUEST_FAILED,
} from "./UserTypes";

/////////////////////////////////////////////////////////////////////////////////////////////////////

//FETCH USER

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payLoad: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payLoad: error.message,
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`http://localhost:3005/posts`)
      .then((res) => {
        const user = res.data;
        console.log(res);
        console.log(user);
        dispatch(fetchUserSuccess(user));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

///////////////////////////////////////////////////////////////////////////////////////////

//POST USERS
export const postUserStarted = () => {
  return {
    type: POST_REQUEST_STARTED,
  };
};
export const postUserSuccess = (users) => {
  return {
    type: POST_REQUEST_SUCCEEDED,
    payLoad: users,
  };
};
export const postUserFailure = (error) => {
  return {
    type: POST_REQUEST_FAILED,
    payLoad: error.message,
  };
};

//////////////////////////////////////////////////////////////////////////////////////
export const postUser = (data) => {
  return (dispatch) => {
    dispatch(postUserStarted);
    axios
      .post(`http://localhost:3005/posts`, data)
      .then((res) => {
        const user = res.data;
        console.log(res);
        console.log(user);
        dispatch(postUserSuccess(user));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(postUserFailure(errorMsg));
      });
  };
};

///////////////////////////////////////////////////////////////////////////////////////////

//DELETE USERS
export const deleteUserStarted = () => {
  return {
    type: DELETE_REQUEST_STARTED,
  };
};
export const deleteUserSuccess = (id) => {
  return {
    type: DELETE_REQUEST_SUCCEEDED,
    payLoad: id,
  };
};
export const deleteUserFailure = (error) => {
  return {
    type: DELETE_REQUEST_FAILED,
    payLoad: error.message,
  };
};

//////////////////////////////////////////////////////////////////////////////////////
export const deleteUser = (data) => {
  return (dispatch) => {
    dispatch(deleteUserStarted);
    axios
      .delete(`http://localhost:3005/posts/${data}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteUserSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(deleteUserFailure(errorMsg));
      });
  };
};
///////////////////////////////////////////////////////////////////////////////////////////

//PATCH USERS
export const patchUserStarted = () => {
  return {
    type: PATCH_REQUEST_STARTED,
  };
};
export const patchUserSuccess = (data) => {
  return {
    type: PATCH_REQUEST_SUCCEEDED,
    payLoad: data,
  };
};
export const patchUserFailure = (error) => {
  return {
    type: PATCH_REQUEST_FAILED,
    payLoad: error.message,
  };
};

//////////////////////////////////////////////////////////////////////////////////////
export const patchUser = (data) => {
  return (dispatch) => {
    dispatch(patchUserStarted);
    axios
      .patch(`http://localhost:3005/posts/${data.id}`, data)
      .then((res) => {
        console.log(res);
        dispatch(patchUserSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(patchUserFailure(errorMsg));
      });
  };
};
