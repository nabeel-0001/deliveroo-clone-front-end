import { Box, Button, Link, Typography } from "@mui/material";
import BackButton from "./backButton";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
const TopMenu = () => {
  return (
    <Box
      sx={{
        marginLeft: "50px",
        marginRight: "50px",
        paddingBottom: "10px",
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <BackButton />
      </Box>
      <Box
        sx={{
          flexShrink: 1,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Box
          style={{
            maxHeight: "200px",
            height: "200px",
            minWidth: "150px",
          }}
        >
          <img
            src="./logo/image-1.webp"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt=""
          />
        </Box>
        <Box>
          <Box sx={{ marginBottom: "5px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: "2rem",
                  md: "1.5rem",
                  xs: "1rem",
                },
              }}
            >
              <strong> Tossed - St Martin's Lane</strong>
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "0.75rem",
              }}
            >
              Chicken &#183; Salads &#183; Healthy
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              0.20 miles away &#183; Opens at 11:00 &#183; £7.00 minimum &#183;
              £0.79 delivery
            </Typography>
          </Box>
          <Link href="/" sx={{ color: "inherit", textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                marginTop: "15px",
              }}
            >
              <InfoIcon
                sx={{
                  marginRight: "5px",
                  color: "white",
                  backgroundColor: "#a8aeba",
                  borderRadius: "13px",
                  fontSize: "1rem",
                }}
              />

              <Box>
                <Box
                  sx={{
                    width: "fit-content",
                  }}
                >
                  <Typography variant="body" sx={{ fontSize: "0.9rem" }}>
                    Info
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                    Map, allergens and hygiene rating
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "1rem",
                    color: "#00ccbc",
                  }}
                />
              </Box>
            </Box>
          </Link>{" "}
          <Link href="/" sx={{ color: "inherit", textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                marginTop: "15px",
              }}
            >
              <StarIcon
                sx={{
                  marginRight: "5px",
                  color: "#4d7c1b",
                  borderRadius: "13px",
                  fontSize: "1rem",
                }}
              />

              <Box>
                <Box
                  sx={{
                    width: "fit-content",
                  }}
                >
                  <Typography
                    variant="body"
                    sx={{ fontSize: "0.9rem", color: "#4d7c1b" }}
                  >
                    4.7 Excellent
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                    See all 500 reviews
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "1rem",
                    color: "#00ccbc",
                  }}
                />
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default TopMenu;
