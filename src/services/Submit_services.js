import { Submit_apis } from "../apikeys/Submitkeys";
import { UsePatchmethod } from "../axiosmethods/Patchmethod";
const SubmitUser = async (data) => {
  try {
    const api = Submit_apis?.submit;
    const response = await UsePatchmethod(api, data, "");
    if (response) {
      return response?.data;
    }
  } catch (error) {
    return error;
  }
};

export { SubmitUser };
