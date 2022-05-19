import SideBar from "./comp/SideBar";
import Feed from "./comp/Feed";
import RightBar from "./comp/RightBar";
import NavBar from "./comp/NavBar";
import { Box, createTheme, Stack } from "@mui/material";
import AddPost from "./comp/AddPost";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
