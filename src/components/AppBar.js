import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    Toolbar
} from "@mui/material";
import React from "react";


const pages = ["DASHBOARD", "PACKAGES", "EVENTS", "BOLG"];
export const AppBarDesktop = ({ setOpen }) => {
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar variant="dense">
        <Box sx={{ width: 130 }}>
          <img src="/images/jobforher-logo.png" style={{ width: "100%" }} />
        </Box>
        <IconButton
          onClick={() =>
            setOpen((prev) => {
              return !prev;
            })
          }
        >
          <MenuIcon sx={{ ml: 10 }}></MenuIcon>
        </IconButton>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 8 }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: "black", display: "block", fontSize: 16 }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <IconButton
          onClick={() => console.log("forever21 icon clicked")}
          sx={{ p: 0 }}
        >
          <Avatar alt="Forever 21" src="/images/forever21.png" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export const AppBarMobile = ({ setOpen }) => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <IconButton
          onClick={() =>
            setOpen((prev) => {
              return !prev;
            })
          }
        >
          <MenuIcon></MenuIcon>
        </IconButton>
        <Box sx={{ width: 130 }}>
          <img src="/images/jobforher-logo.png" style={{ width: "100%" }} />
        </Box>
        <IconButton
          onClick={() => console.log("forever21 icon clicked")}
          sx={{ p: 0 }}
        >
          <Avatar alt="Forever 21" src="/images/forever21.png" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
