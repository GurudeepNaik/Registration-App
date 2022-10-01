import React from "react";
import { Provider } from "react-redux";
// import { APIContextProvider } from "./Components/Context";
import Post from "./Components/Post";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      {/* <APIContextProvider> */}
      <Post />
      {/* </APIContextProvider> */}
    </Provider>
  );
};

export default App;
