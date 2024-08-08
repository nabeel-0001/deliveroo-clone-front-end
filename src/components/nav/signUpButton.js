import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const SignUpButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: "black",
        border: "1px solid #dadce0",
        boxShadow: "none",
        width: "200px",
        fontSize: "0.65rem",
        maxHeight: "35px",
        "&:hover": {
          borderColor: "#c5c9d1",
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        },
      }}
    >
      <HomeIcon
        sx={{ marginRight: "5px", fontSize: "1.1rem", color: "#00ccbc" }}
      />
      Sign Up or log in
    </Button>
  );
};
export default SignUpButton;
