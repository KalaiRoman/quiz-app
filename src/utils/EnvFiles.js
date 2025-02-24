const Envfiles = {
  baseurl:
    process.env.REACT_APP_RUNNING_DEVELOPMENT !== "development"
      ? process.env.REACT_APP_BASE_URL_DEVELOPMENT
      : process.env.REACT_APP_BASE_URL_PRODUCATION,
  port: process.env.PORT,
};

export { Envfiles };
