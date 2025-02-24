const Envfiles = {
  development_url:
    process.env.REACT_APP_RUNNING_DEVELOPMENT == "development"
      ? process.env.REACT_APP_BASE_URL_DEVELOPMENT
      : process.env.REACT_APP_BASE_URL_PRODUCATION,
  port: process.env.REACT_APP_PORT,
};

export { Envfiles };
