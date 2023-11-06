import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";
import * as React from "react";
import { drawerWidth, menuItems } from "../constants";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
   
  },
  [theme.breakpoints.down("sm")]: {
    width: 0,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MenuDrawer({ open }) {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          visibility: "visible !important",
          transform: "translateX(0px) !important",
          top: 80,
          backgroundColor: grey[800],
        },
        "& .MuiTypography-root": {
          color: grey[400],
        },
        "& .MuiSvgIcon-root": {
          color: grey[400],
        },
      }}
    >
      <List>
        <ListItem key={99} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <img
                src="/images/hp-logo.png"
                style={{ width: 48, height: 48 }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Hello, Divya"
              secondary="Hewlett Packard Enterprise"
            />
          </ListItemButton>
        </ListItem>
        {menuItems.map((menu, index) => (
          <ListItem key={menu.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                secondary={menu.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
