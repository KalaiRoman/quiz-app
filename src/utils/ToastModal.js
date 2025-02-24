import toast from "react-hot-toast";
const toastSuccess = (params) => {
  return toast.success(params);
};
const toastError = (params) => {
  return toast.error(params);
};

export { toastSuccess, toastError };
