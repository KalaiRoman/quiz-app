import { SubmitUser } from "../../services/Submit_services";
import QuestionsList from "../../utils/Questions";
import { questionAttenUser, questionGet } from "../../utils/TokenLocal";
import {
  QuestionCurrentUpdateNext,
  QuestionCurrentUpdatePrevious,
  QuestionFailed,
  QuestionRequest,
  QuestionSuccess,
  QuestionCurrentUpdateAnswer,
} from "../reducers/Questions_reducer";
const Question_get = (params) => async (dispatch) => {
  dispatch(QuestionRequest());
  try {
    // const response = QuestionsList;
    // const updateQuestions = [];
    // if (response) {
    //   response?.map((item, index) => {
    //     const datas = {
    //       ...item,
    //       score: 0,
    //       yourResponse: "",
    //       correctResponse: "",
    //       YourAnswerstatus: false,
    //       yourcoding: "",
    //       yourOutput: "",
    //     };
    //     updateQuestions.push(datas);
    //   });
    // }

    const oldData = questionGet();
    if (oldData) {
      questionAttenUser(oldData);
    } else {
      questionAttenUser(params);
    }

    dispatch(QuestionSuccess(oldData ? oldData : params));
  } catch (error) {
    dispatch(QuestionFailed("Question Error..!"));
  }
};

const Question_Update_Current_Next = (params) => async (dispatch) => {
  try {
    const updateQuestion = params;
    if (updateQuestion) {
      dispatch(QuestionCurrentUpdateNext(updateQuestion));
    }
  } catch (error) {
    dispatch(QuestionFailed("Question Error..!"));
  }
};

const Question_Update_Current_Previous = (params) => async (dispatch) => {
  try {
    const updateQuestion = params;

    dispatch(QuestionCurrentUpdatePrevious(updateQuestion));
  } catch (error) {
    dispatch(QuestionFailed("Question Error..!"));
  }
};

const Question_Update_Answer = (params) => async (dispatch) => {
  try {
    const updateQuestion = params;

    const currentIndex = updateQuestion?.id;

    const oldData = questionGet();
    let updateDataAnswer = oldData?.map((item, index) =>
      item?._id === currentIndex ? updateQuestion : item
    );

    questionAttenUser(updateDataAnswer);

    dispatch(QuestionCurrentUpdateAnswer(updateQuestion));
  } catch (error) {
    dispatch(QuestionFailed("Question Error..!"));
  }
};

const SubmitAnswerUser = (params, navigate) => async (dispatch) => {
  try {
    const response = await SubmitUser(params);

    if (response) {
      navigate("/result");
    }
  } catch (error) {}
};

export {
  Question_get,
  Question_Update_Current_Next,
  Question_Update_Current_Previous,
  Question_Update_Answer,
  SubmitAnswerUser,
};
