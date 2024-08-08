import { AppBar, Box, Toolbar } from "@mui/material";
import NavSearchBar from "./navSearchBar";
import SignUpButton from "./signUpButton";
import AccountButton from "./accountButton";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "#dadce0 0.5px solid", maxHeight: "60px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 1 }}>
        <Box sx={{ display: "flex" }}>
          <a href="/">
            <img
              src="./logo/deliveroo-logo.png"
              alt="Deliveroo Logo"
              style={{ height: "30px" }}
            />
          </a>
        </Box>
        <Box sx={{ maxWidth: "500px", width: "500px" }}>
          <NavSearchBar />
        </Box>
        <Toolbar sx={{ gap: 1 }}>
          <SignUpButton />
          <AccountButton />
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
