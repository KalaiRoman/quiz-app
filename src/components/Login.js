import React, { useEffect, useState } from "react";
import { handcap, loginimage } from "../assests/images";
import InputBoxs from "../utils/InputBoxs";
import { RegexData } from "../utils/Regex";
import { LoginTexts } from "../consts/Login_const";
import { Login_Icons } from "../consts/Icons/Icons";
import { useDispatch } from "react-redux";
import { Login_User } from "../redux/actions/Login_action";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../utils/TokenLocal";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });
  const token = getToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { email, password, error } = user;

  const loginForms = [
    {
      id: 1,
      name: "email",
      placeholder: LoginTexts?.emailplaceholder,
      type: "text",
      value: email,
    },
    {
      id: 2,
      name: "password",
      placeholder: LoginTexts?.passwordplaceholder,
      type: "password",
      value: password,
    },
  ];

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleChangeShow = () => {
    setShow((pre) => !pre);
  };

  const handleSubmit = async () => {
    try {
      if (!email && !password) {
        setUser((pre) => ({
          ...pre,
          error: "Please Enter Email ID and Password",
        }));
      } else {
        if (email && password) {
          if (RegexData.emailRegex.test(email)) {
            const data = {
              email,
              password,
            };
            dispatch(Login_User(data, navigate));
            setUser((pre) => ({
              ...pre,
              error: "",
            }));
          } else {
            setUser((pre) => ({
              ...pre,
              error: "Please Enter Valid Email ID",
            }));
          }
        }
      }
    } catch (error) {}
  };

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="main-login">
      <div className="inside-login">
        <div className="left-login">
          <div className="left-inside-section-login">
            <div className="xxl lg-fw login-text-color">
              {LoginTexts?.Login}
            </div>

            <div className="mt-5">
              {loginForms?.map((item, index) => {
                return (
                  <div>
                    <div>
                      <label>
                        {item?.name.at(0).toUpperCase()}
                        {item?.name?.slice(1)}
                      </label>
                    </div>
                    <div className="mt-2 mb-4">
                      <InputBoxs
                        type={item?.type}
                        name={item?.name}
                        placeholder={item?.placeholder}
                        value={item?.value}
                        onChange={handleChange}
                        showPassword={handleChangeShow}
                        show={show}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="text-danger">{error}</div>
            </div>
            <div>
              <button className="login-button mt-2" onClick={handleSubmit}>
                <div>{LoginTexts?.LoginButton}</div>{" "}
                <div>{Login_Icons?.LoginIcon}</div>
              </button>
            </div>
          </div>
        </div>
        <div className="right-login">
          <img src={loginimage} alt="no image" className="cap-image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
