import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  questionsData: [],
  error: "",
  currentQuestion: 0,
};
const Question_reducer = createSlice({
  name: "questions",
  initialState: initialState,
  reducers: {
    QuestionRequest(state, action) {
      state.loading = true;
      state.error = "";
      state.questionsData = [];
    },
    QuestionSuccess(state, action) {
      state.loading = false;
      state.error = "";
      state.questionsData = action?.payload;
    },
    QuestionFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.questionsData = [];
    },
    QuestionCurrentUpdateNext(state, action) {
      state.currentQuestion = action.payload;
    },
    QuestionCurrentUpdatePrevious(state, action) {
      state.currentQuestion = action.payload;
    },
    QuestionCurrentUpdateAnswer(state, action) {
      const {
        id,
        options,
        question,
        yourResponse,
        yourcoding,
        yourOutput,
        type,
      } = action.payload;

      const findCurrentQuestion = state?.questionsData?.find(
        (item, index) => item?._id == id
      );

      if (findCurrentQuestion) {
        findCurrentQuestion._id = id;
        findCurrentQuestion.options = options;
        findCurrentQuestion.question = question;
        findCurrentQuestion.yourResponse = yourResponse;
        findCurrentQuestion.yourcoding = yourcoding;
        findCurrentQuestion.yourOutput = yourOutput;
        findCurrentQuestion.type = type;
      }
    },
  },
});

export const {
  QuestionRequest,
  QuestionSuccess,
  QuestionFailed,
  QuestionCurrentUpdateNext,
  QuestionCurrentUpdatePrevious,
  QuestionCurrentUpdateAnswer,
} = Question_reducer.actions;

export default Question_reducer.reducer;
