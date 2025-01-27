import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { store } from "./Features/store.js";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer/>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
