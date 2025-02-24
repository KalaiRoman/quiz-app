import { Login_apis } from "../apikeys/Loginkeys";
import { UsePostmethod } from "../axiosmethods/Postmethod";

const RegisterUser = async (data) => {
  try {
    const api = Login_apis?.register;
    const response = await UsePostmethod(api, data, "");
    if (response) {
      return response?.data;
    }
  } catch (error) {
    return error;
  }
};

export { RegisterUser };
