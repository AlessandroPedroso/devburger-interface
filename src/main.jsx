import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppProvider from "./hooks";
import { router } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <RouterProvider router={router} />
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
