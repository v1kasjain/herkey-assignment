import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Divider,
  Hidden,
  Link,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";
import AccountSettings from "./AccountSettings";
import ApplicationSettings from "./ApplicationSettings";

const InfoBox = styled("div", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
  }));

function AppContent() {
  return (
    <Stack spacing={2}>
      <Hidden smDown>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography color="text.primary">MyAccount</Typography>
        </Breadcrumbs>
      </Hidden>

      <Paper>
        <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
          <ArrowBack sx={{ color: "#99ca3b" }} />
          <Typography variant="subtitle1" m={2}>
            My Account
          </Typography>
        </Box>

        <Divider />
        <ProfileCard />
        <InfoBox>
          <AccountSettings />
          <ApplicationSettings />
        </InfoBox>
      </Paper>
    </Stack>
  );
}

export default AppContent;
