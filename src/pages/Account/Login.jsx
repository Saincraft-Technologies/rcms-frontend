// import React, { Fragment, useState, useContext } from "react";
// import { Link, useNavigate, redirect } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import PublicNavbar from "../../components/PublicNavbar";
// import { UserContext, CartContext } from "../../index";
// // import Axios from 'axios';
// import axios from "axios";

// // const navigate = useNavigate();
// function Contact({ user, setUser, token, setToken }) {
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({});
//   const [loggedin, setLoggedin] = useState(false);
//   // const [token, setToken] = useState("");

//   const cartToken = useContext(CartContext);

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const onLogin = async (e) => {
//     e.preventDefault();
//     // console.log(inputs);

//     const getData = async () => {
//       const res = await axios.post(`${import.meta.env.VITE_API_PATH}login`, inputs);
//       // console.log('asda');
//       // return res;
//       if (res.data === "failed") {
//         alert("failed");
//       } else {
//         return res;
//       }
//     };
//     const login = async () => {
//       // console.log("USER is: ");
//       const result = await getData();
//       setUser(result.data.user);
//       setToken(result.data.token);
//       console.log("token is: ", result.data.token);

//       // set cookie token
//       document.cookie = `token=${result.data.token}`;

//       const res = await axios.post(`${import.meta.env.VITE_API_PATH}usersessions`, {
//         token: result.data.token,
//         user_id: result.data.user_id,
//       });
//       return result;
//     };

//     login().then((result) => {
//       console.log("then");

//       try {
//         // update cart
//         const updateCart = async () => {
//           const res = await axios.post(
//             `${import.meta.env.VITE_API_PATH}logincartupdate`,
//             {
//               token: cartToken,
//               user_id: result.data.user_id,
//             }
//           );
//           console.log("updatecart res is: ", res);
//         };
//         updateCart();
//       } catch (error) {
//         console.log("no items in cart to transfer to user. ");
//       }

//       // delete cart cookie
//       document.cookie = `cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//     });

//     // const userlogin = inputs.email;
//     // const userlogin = login();
//     // console.log("USER is: ");
//     // console.log(userlogin);
//     // redirect
//     // navigate('/shop')

//     // redirect
//     // window.location = "/";

//     // Axios({
//     //     method: "POST",
//     //     data: inputs,
//     //     // withCredentials: true,
//     //     url: `${import.meta.env.VITE_API_PATH}login`,
//     // })
//     // .then(() => {
//     //     setUser(res.data);
//     //     console.log("user is:");
//     //     console.log(user);
//     //     // setToken(res.token);
//     //     // console.log(token);
//     //     // onLogin(res.data);
//     // })
//   };

//   if (user) {
//     navigate("/shop");
//   }

//   // submit functions and console log response
//   // const onLogin = (e) => {
//   //     e.preventDefault();
//   //     Axios({
//   //         method: "POST",
//   //         data: inputs,
//   //         // withCredentials: true,
//   //         url: `${import.meta.env.VITE_API_PATH}login`,
//   //     })
//   //     .then((res) => {
//   //         setToken(res.data);
//   //         console.log(token);
//   //         // onLogin(res.data);
//   //     })
//   // };

//   //       // submit function
//   //       const onSubmitForm = (e) => {
//   //           e.preventDefault();
//   //         //   console.log(inputs);
//   //           try {
//   //             const response = fetch(`${import.meta.env.VITE_API_PATH}login`, {
//   //             method: "POST",
//   //             headers: {"Content-Type": "application/json"},
//   //             body: JSON.stringify(inputs)
//   //         }).then((response) => response.json())
//   //         .then((data) => {
//   //             console.log(data)
//   //         });
//   //         // return response;
//   //         // window.location = "/shop";
//   //     } catch (error){
//   //         console.error('error');
//   //     };
//   // };

//   // const [user, setUser] = React.useState(null);

//   // const handleLogin = async (e) => {
//   //     // console.log("sadas");
//   //     const user = await onSubmitForm(e);
//   //   console.log(user);
//   //   setUser(user);
//   // }

//   const handleLogout = () => setUser(null);

//   return (
//     <Fragment>
//       {/* navbar conditionaly rendered */}
//       {user && <Navbar />}
//       {!user && <PublicNavbar />}

//       <div class="container">
//         <div>
//           <h1 class="text-center mt-5">Login</h1>
//           {/* <a href=`${import.meta.env.VITE_API_PATH}session`>Session</a> */}
//         </div>
//         <div class="row justify-content-center mt-5">
//           <div class="card col-md-6 justify-content-center">
//             <div class="card-body">
//               <form>
//                 <div class="form-group">
//                   <label for="exampleInputEmail1">Email address</label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     id="email"
//                     name="email"
//                     placeholder="Enter email"
//                     onChange={handleChange}
//                   />
//                   <label for="exampleInputEmail1">Password</label>
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Enter password"
//                     onChange={handleChange}
//                   />
//                   <div class="row mx-auto">
//                     <button class="btn btn-primary mt-4 mr-2" onClick={onLogin}>
//                       {" "}
//                       Login
//                     </button>
//                     <div class="mt-5">
//                       or <a href="/signup">SignUp</a>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default Contact;
