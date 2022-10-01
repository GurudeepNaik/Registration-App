// import React, { useContext, useState, createContext } from "react";
// // import axios from "axios";

// const APIContext = createContext();

// export function APIContextProvider({ children }) {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const { data } = await axios.get(`http://localhost:3005/posts`);
//   //     setUsers(data);
//   //     setIsLoading(false);
//   //   };
//   //   fetchData();
//   // }, []);

//   const postData = async (input) => {
//     await fetch("http://localhost:3005/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(input),
//     });
//     setUsers((pre) => [...pre, input]);
//   };

//   const patchData = async (input) => {
//     try {
//       const patch = await fetch(`http://localhost:3005/posts/${input.id}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           id: input.id,
//           name: input.name,
//           phone: input.phone,
//           email: input.email,
//           company: input.company,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//       const Data = await patch.json();
//       let array = users.filter((user) => user.id !== Data.id);
//       array.push(Data);
//       array = array.sort((a, b) => {
//         if (a.id >= b.id) {
//           return +1;
//         } else {
//           return -1;
//         }
//       });
//       setUsers(array);
//     } catch (err) {
//       console.log(err);
//     }
//     console.log(users);
//   };

//   const deleteData = async (id) => {
//     try {
//       await fetch(`http://localhost:3005/posts/${id}`, {
//         method: "DELETE",
//       });
//       const arr = await users.filter((value) => value.id !== id);
//       setUsers(arr);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <APIContext.Provider
//       value={{
//         users,
//         isLoading,
//         postData,
//         deleteData,
//         patchData,
//         setIsLoading,
//       }}
//     >
//       {children}
//     </APIContext.Provider>
//   );
// }

// export function useAPI() {
//   const context = useContext(APIContext);
//   if (context === undefined) {
//     throw new Error("Context must be used within a Provider");
//   }
//   return context;
// }
