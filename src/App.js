import SideBar from "./comp/SideBar";
import Feed from "./comp/Feed";
import RightBar from "./comp/RightBar";
import NavBar from "./comp/NavBar";
import { Box, Stack } from "@mui/material";
import AddPost from "./comp/AddPost";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <AddPost />
    </Box>
  );
}

export default App;
