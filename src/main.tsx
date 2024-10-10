import ReactDOM from "react-dom/client";
import { Notifications } from "@mantine/notifications"
import { MantineProvider, } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <Notifications />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </MantineProvider>
);
