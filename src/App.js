import NavBar from "./components/nav/navbar";
import { Box } from "@mui/material";
import "./App.css";
import TopMenu from "./components/menuheader/topMenu";

function App() {
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <menuHeader>
        <TopMenu />
      </menuHeader>
    </Box>
  );
}

export default App;
