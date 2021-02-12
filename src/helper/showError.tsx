import { toast } from "react-toastify";

export const showError = (msg: string) =>
  toast.error(msg, {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
