const setToken = (params) => {
  return localStorage.setItem("token-quiz", JSON.stringify(params));
};

const getToken = () => {
  try {
    const token = localStorage.getItem("token-quiz");
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error("Error parsing token:", error);
    return null;
  }
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
