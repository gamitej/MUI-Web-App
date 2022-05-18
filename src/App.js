import "./App.css";
import { Button,  Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained">
        SETTINGS
      </Button>
      <Button startIcon={<Add />} variant="success">
        ADD NEW POST
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">Heading</Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
        }}
      >
        Outlined
      </Button>
    </div>
  );
}

export default App;
