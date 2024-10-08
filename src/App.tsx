import React from "react";
import { UserAuth } from "./context/AuthContext";
import { UserRoutes } from "./routes/UserRoutes";
import { NonUserRoutes } from "./routes/NonUserRoutes";
import { Box } from "@mantine/core";

const App: React.FC = () => {
  const userAuth = UserAuth();

  // Handle case where UserAuth context might be undefined
  if (!userAuth) {
    return <div>Loading...</div>; // Or some other fallback UI
  }

  const { isLoggedOut } = userAuth;

  return (
    <Box
      mx={"auto"}
      style={{
        maxWidth: "1280px",
      
      }}
    >
      {isLoggedOut ? <UserRoutes /> : <NonUserRoutes children={undefined} />}
    </Box>
  );
};

export default App;
