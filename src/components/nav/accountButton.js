import { Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const AccountButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: "black",
        border: "1px solid #dadce0",
        boxShadow: "none",
        maxHeight: "35px",
        fontSize: "0.65rem",
        "&:hover": {
          borderColor: "#c5c9d1",
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        },
      }}
    >
      <PersonOutlineIcon
        sx={{ marginRight: "5px", fontSize: "1.1rem", color: "#00ccbc" }}
      />
      Account
    </Button>
  );
};
export default AccountButton;
