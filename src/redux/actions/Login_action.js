import { setToken } from "../../utils/TokenLocal";
import {
  LoginFailed,
  LoginRequest,
  LoginSuccess,
} from "../reducers/Login_reducer";

const Login_User = (params, navigate) => async (dispatch) => {
  dispatch(LoginRequest());
  try {
    // const responseData=await
    // setToken(paramsToken)

    if (params) {
      dispatch(LoginSuccess(params));
      setToken(true);
      navigate("/home");
    }
  } catch (error) {
    dispatch(LoginFailed());
  }
};

export { Login_User };
