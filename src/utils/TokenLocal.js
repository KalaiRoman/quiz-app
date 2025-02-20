const setToken = (params) => {
  return localStorage.setItem("token-quiz", JSON.stringify(params));
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("token-quiz"));
};

const removeToken = () => {
  localStorage.clear();
  localStorage.removeItem("token-quiz");
};

export { setToken, getToken, removeToken };
