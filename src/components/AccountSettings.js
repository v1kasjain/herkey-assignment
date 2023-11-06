import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Box, Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { ReactComponent as IconEdit } from "../icons/edit.svg";

function AccountSettings() {
  return (
    <Card sx={{ width: "100%", m: 2 }}>
      <CardHeader
        action={
          <IconButton aria-label="edit">
            <IconEdit />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" component="div">
            My Account Settings
          </Typography>
        }
        sx={{ backgroundColor: "#f8f8f8", fontSize: 16 }}
      ></CardHeader>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Stack>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Full Name
              </Typography>
              <Typography>Divya Chatterjee</Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Phone / Landline*
              </Typography>
              <Typography>7012248563</Typography>
            </Box>
          </Stack>
          <Stack sx={{ ml: 10 }}>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Designation
              </Typography>
              <Typography>Assistant Manager - HR</Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button sx={{ fontWeight: 700 }}>Change Password</Button>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AccountSettings;
