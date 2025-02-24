import { RegisterUser } from "../../services/Login_services";
import {
  setToken,
  questionAttenUser,
  questionGet,
} from "../../utils/TokenLocal";
import {
  LoginFailed,
  LoginRequest,
  LoginSuccess,
} from "../reducers/Login_reducer";
import { QuestionSuccess } from "../reducers/Questions_reducer";
import { Question_get } from "./Question_action";

// const Login_User = (params, navigate, setLoading) => async (dispatch) => {
//   dispatch(LoginRequest());
//   setLoading(true);
//   try {
//     const response = await RegisterUser(params);
//     if (response) {
//       dispatch(LoginSuccess(response?.token));
//       setToken(response?.token);
//       const responseQuestions = response && response?.questionsData;
//       const updateQuestions = [];
//       if (responseQuestions) {
//         responseQuestions?.map((item, index) => {
//           const datas = {
//             ...item,
//             id: item?._id,
//             yourResponse: "",
//             yourcoding: "",
//             yourOutput: "",
//           };
//           updateQuestions.push(datas);
//         });
//       }
//       const oldData = questionGet();
//       if (oldData) {
//         questionAttenUser(oldData);
//       } else {
//         questionAttenUser(updateQuestions);
//       }
//       if (updateQuestions) {
//         dispatch(Question_get(updateQuestions));
//       }
//       dispatch(QuestionSuccess(oldData ? oldData : updateQuestions));
//       navigate("/home");
//     } else {
//     }
//   } catch (error) {
//     dispatch(LoginFailed());
//     setLoading(false);
//   }
// };

const Login_User = (params, navigate, setLoading) => async (dispatch) => {
  dispatch(LoginRequest());
  setLoading(true);

  try {
    const response = await RegisterUser(params);

    if (!response) throw new Error("Invalid response from server");

    const { token, questionsData } = response;
    dispatch(LoginSuccess(token));
    setToken(token);

    let updateQuestions = [];

    if (Array.isArray(questionsData)) {
      updateQuestions = questionsData.map((item) => ({
        ...item,
        id: item?._id,
        yourResponse: "",
        yourcoding: "",
        yourOutput: "",
      }));
    }

    questionAttenUser(updateQuestions);
    localStorage.setItem("questionAttented", JSON.stringify(updateQuestions));
    dispatch(Question_get(updateQuestions));
    dispatch(QuestionSuccess(updateQuestions));

    navigate("/home");
  } catch (error) {
    console.error("Login error:", error);
    dispatch(LoginFailed());
  } finally {
    setLoading(false);
  }
};

export { Login_User };
