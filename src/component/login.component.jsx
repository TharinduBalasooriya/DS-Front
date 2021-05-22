import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import '../css/login.css'
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        (response) => {

            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user)
            if(user.usertype === "seller"){
                props.history.push("/sellerhome");
                window.location.reload();
        

            }else{
                 props.history.push("/itemlist");
                 window.location.reload();

            }
          
        
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (

    <div className="spec-body">

        <br/><br/>
        <React.Fragment>
                <div className="col-md-12">
      <div className="spec-card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group" style={{opacity:100}}>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group" style={{opacity:100}}>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
            <br/>
          <div className="form-group row" >

            <button className="btn btn-primary btn-block col" disabled={loading} >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <div className="form-group row mt-3">

            <div className="btn btn-dark btn-block col" onClick={()=>{
                props.history.push("/signup");
                window.location.reload();

            }}  > 
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Signup</span>
            </div>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </React.Fragment>



    </div>

  );
};

export default Login;
