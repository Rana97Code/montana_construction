import {
  toast,
  ToastContainer,
  ToastOptions,
  ToastContent,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "info" | "warning";

export const Notify = (type: ToastType, message: string | ToastContent) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
  };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "info":
      toast.info(message, toastOptions);
      break;
    case "warning":
      toast.warning(message, toastOptions);
      break;
    default:
      throw new Error(`Unknown toast type: ${type}`);
  }
};

export const ToastProvider = () => <ToastContainer />;
