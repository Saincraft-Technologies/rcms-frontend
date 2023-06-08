import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import {  passwordHashVerify } from "./Service";

function Login({ user, setUser, token, setToken }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${import.meta.env.VITE_API_PATH}/contacts/list?rel=users,authentications`,
      {
        headers: {
          authorization: import.meta.env.VITE_API_KEY,
        },
      }
    );

    await res.body.getReader().read().then(async ({ value, done }) => {
      let jsondata = new TextDecoder("utf-8").decode(value);
      jsondata = JSON.parse(jsondata);
      console.log(jsondata);
      // console.log('data: ', jsondata.data);
      let contacts = jsondata.data;

      let contact = contacts.filter((contact) => {
        return contact.email === inputs.email;
      });

      console.log('cintact:', contact);
      const hashVerify = await passwordHashVerify(
        inputs.password,
        contact[0].authentications[0].salt,
        contact[0].authentications[0].hash
      );

      if (hashVerify) {
        setUser(
          contact[0].id, 
        );
        navigate("/");
      } else {
        alert("Login not verified");
      }
    });
  };

  const handleLogout = () => setUser(null);

  return (
    <Fragment>
      {!user && <Navbar />}

      <div className="container">
        <div>
          <h1 className="text-center mt-5">Login</h1>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="card col-md-6 justify-content-center">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                  <div className="row mx-auto">
                    <button className="btn btn-primary mt-4 mr-2" onClick={onLogin}>
                      Login
                    </button>
                    <div className="mt-5">
                      or <a href="/signup">SignUp</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
