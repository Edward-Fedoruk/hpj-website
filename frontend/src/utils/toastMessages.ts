import Toastify from "toastify-js";

const showToast = (m: string | undefined, type: "neutral" | "success" | "warning" | "error" = "neutral") => {
  const styles = {
    neutral: {
      background: "linear-gradient(to right, #e5e7eb, #d1d5db)",
      color: "#111",
    },
    success: {
      background: "linear-gradient(to right, #3ecf73, #66e494)",
      color: "#fff",
    },
    warning: {
      background: "linear-gradient(to right, #f59e0b, #fbbf24)",
      color: "#000",
    },
    error: {
      background: "linear-gradient(to right, #ef4444, #dc2626)",
      color: "#fff",
    },
  };

  Toastify({
    text: m,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    style: styles[type],
  }).showToast();
};

export default showToast;
