import React, { useCallback, useEffect, useState } from "react";
import { handcap, loginimage } from "../assests/images";
import InputBoxs from "../utils/InputBoxs";
import { RegexData } from "../utils/Regex";
import { LoginTexts } from "../consts/Login_const";
import { Login_Icons } from "../consts/Icons/Icons";
import { useDispatch } from "react-redux";
import { Login_User } from "../redux/actions/Login_action";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { getToken } from "../utils/TokenLocal";

function Login() {
  const [paramsCode] = useSearchParams();

  console.log(paramsCode, "kalai");

  const codeParams = paramsCode?.get("code");
  const [user, setUser] = useState({
    email: "",
    error: "",
    type: "false",
  });
  const [loading, setLoading] = useState(false);
  const { email, error, type } = user;
  const token = getToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const loginForms = [
    {
      id: 1,
      name: "email",
      placeholder: LoginTexts?.emailplaceholder,
      type: "text",
      value: email,
      label: LoginTexts?.label,
    },
  ];
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleChangeShow = () => {
    setShow((pre) => !pre);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!email) {
        setUser((pre) => ({
          ...pre,
          error: "Please Enter Email ID / Mobile No",
        }));
        setLoading(false);
      } else {
        if (type) {
          if (email) {
            if (RegexData.mobileNo.test(email)) {
              const data = {
                email,
                code: codeParams,
              };
              dispatch(Login_User(data, navigate, setLoading));
              setUser((pre) => ({
                ...pre,
                error: "",
              }));
              setLoading(false);
            } else {
              setUser((pre) => ({
                ...pre,
                error: "Please Enter Valid Mobile No",
              }));
            }
          }
        } else {
          if (email) {
            if (RegexData.emailRegex.test(email)) {
              const data = {
                email,
                code: codeParams,
              };
              dispatch(Login_User(data, navigate, setLoading));
              setUser((pre) => ({
                ...pre,
                error: "",
              }));
              setLoading(false);
            } else {
              setUser((pre) => ({
                ...pre,
                error: "Please Enter Valid Email ID",
              }));
              setLoading(false);
            }
          }
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const checkTypeInput = useCallback(async () => {
    try {
      if (RegexData?.number?.test(email)) {
        setUser((pre) => ({
          ...pre,
          type: true,
        }));
      } else {
        setUser((pre) => ({
          ...pre,
          type: false,
        }));
      }
    } catch (error) {}
  }, [type, email]);

  useEffect(() => {
    checkTypeInput();
  }, [email]);

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
                      <label>{item?.label}</label>
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
                        emailormobilecheck={type}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="text-danger">{error}</div>
            </div>
            <div>
              <button className="login-button mt-2" onClick={handleSubmit}>
                <div>{loading ? "Loading..." : LoginTexts?.LoginButton}</div>{" "}
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
