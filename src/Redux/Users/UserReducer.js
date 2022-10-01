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

const initialState = {
  loading: false,
  users: [],
  error: "",
};
/////////////////////////////////////////////////////////////////////////////////////////////////////

const getReducer = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payLoad,
        error: "",
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        error: action.payLoad,
        users: [],
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case POST_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case POST_REQUEST_SUCCEEDED:
      return {
        loading: false,
        users: [...state.users, action.payLoad],
        error: "",
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case POST_REQUEST_FAILED:
      return {
        loading: false,
        error: action.payLoad,
        users: state.users,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case DELETE_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case DELETE_REQUEST_SUCCEEDED:
      return {
        loading: false,
        users: state.users.filter((value) => value.id !== action.payLoad),
        error: "",
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case DELETE_REQUEST_FAILED:
      return {
        loading: false,
        error: action.payLoad,
        users: state.users,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case PATCH_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case PATCH_REQUEST_SUCCEEDED:
      let array = state.users.filter((value) => value.id !== action.payLoad.id);
      array = [...array, action.payLoad];
      array = array.sort((a, b) => {
        if (a.id > b.id) {
          return +1;
        } else {
          return -1;
        }
      });
      return {
        loading: false,
        users: [...array],
        error: "",
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    case PATCH_REQUEST_FAILED:
      return {
        loading: false,
        error: action.payLoad,
        users: state.users,
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    default:
      return state;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
};
export default getReducer;
