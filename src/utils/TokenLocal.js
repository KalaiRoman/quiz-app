const setToken = (params) => {
  return localStorage.setItem("token-quiz", JSON.stringify(params));
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("token-quiz"));
};

const removeToken = () => {
  localStorage.clear();
  localStorage.removeItem("token-quiz");
  localStorage.removeItem("questionAttented");
};

// question attented

const questionAttenUser = (params) => {
  return localStorage.setItem("questionAttented", JSON.stringify(params));
};

const questionGet = () => {
  return JSON.parse(localStorage.getItem("questionAttented"));
};

export { setToken, getToken, removeToken, questionAttenUser, questionGet };
