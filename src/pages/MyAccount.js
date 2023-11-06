import {
  Box,
  Hidden,
  styled
} from "@mui/material";
import React from "react";

import { AppBarDesktop, AppBarMobile } from "../components/AppBar";
import AppContent from "../components/AppContent";
import MenuDrawer from "../components/MenuDrawer";
import SubMenu from "../components/SubMenu";
import { drawerWidth } from "../constants";

const MainBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function MyAccount() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Hidden smDown>
        <AppBarDesktop setOpen={setOpen} />
      </Hidden>

      <Hidden smUp>
        <AppBarMobile setOpen={setOpen} />
      </Hidden>

      <Hidden smUp>
        <SubMenu />
      </Hidden>

      <Box
        component="main"
        sx={{ display: "flex", p: 3, position: "relative", top: 80 }}
      >
        <MenuDrawer open={open} setOpen={setOpen} />
        <Hidden smDown>
          <MainBox open={open}>
            <AppContent />
          </MainBox>
        </Hidden>
        <Hidden smUp>
          <Box open={open}>
            <AppContent />
          </Box>
        </Hidden>
      </Box>
    </>
  );
}

export default MyAccount;
