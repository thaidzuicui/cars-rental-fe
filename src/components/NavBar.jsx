import React from "react";
import { Box, useTheme, Link, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const TABS = [
    { title: "Home", path: "/" },
    { title: "Search", path: "/search" },
    { title: "Profile", path: "/profile" },
  ];
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  // const user = {
  //   avatar:
  //     "https://i.pinimg.com/236x/af/7f/d3/af7fd34075ee8540937e7349f280c3ca.jpg",
  //   full_name: "John Doe",
  //   username: "johndoe",
  // };
  const user = null;
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          backgroundColor: theme.palette.secondary.main,
          paddingLeft: "3.125rem",
          paddingRight: "3.75rem",
          borderBottom: "1px solid #293346",
        }}
      >
        <Box
          component="nav"
          sx={{
            display: "flex",
            height: "6.25rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginX: "auto",
            maxWidth: "82.5rem",
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontWeight: "600",
              color: theme.palette.blue.main,
            }}
          >
            TRANSFORM
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {TABS.map((tab) => (
              <Link
                key={tab.title}
                href={tab.path}
                underline="none"
                sx={{
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                <Typography
                  component={"p"}
                  sx={{
                    color:
                      location.pathname === tab.path
                        ? theme.palette.blue.main
                        : theme.palette.secondary.paper,
                    display: "flex",
                    fontWeight: "600",
                    marginRight: "1.75rem",
                  }}
                >
                  {tab.title}
                </Typography>
              </Link>
            ))}

            {user ? (
              <Box
                sx={{
                  color: "#00B5BA",
                  width: "30px",
                  height: "30px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#EBFBFB",
                }}
              >
                {user.avatar ? (
                  <Avatar src={user.avatar} />
                ) : (
                  <Avatar color="primary" variant="soft">
                    {user.username.charAt(0).toUpperCase()}
                  </Avatar>
                )}
              </Box>
            ) : (
              <Button
                sx={{
                  display: "flex",
                  height: "2.75rem",
                  width: "6.8rem",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.25rem",
                  backgroundColor: theme.palette.blue.main,
                  color: "white",
                  fontWeight: "600",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
