import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { ReactComponent as IconEdit } from "../icons/edit.svg";

function ProfileCard(props) {
  return (
    <Card sx={{ minWidth: 275, m: 2 }}>
      <CardHeader
        action={
          <IconButton aria-label="edit">
            <IconEdit />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" component="div">
            My Profile
          </Typography>
        }
        sx={{ backgroundColor: "#f8f8f8", fontSize: 16 }}
      ></CardHeader>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 118,
              height: 118,
              mr: 4,
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <Avatar
              alt="Divya Chatterjee Profile Image"
              src="/avatars/divya.png"
              sx={{
                width: [68, 118, 118],
                height: [68, 118, 118],
                objectPosition: "top center",
              }}
            />
          </Box>

          <Stack sx={{ mt: 1, mb: 2 }}>
            <Typography variant="h6">Divya Chatterjee</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Designation
              </Typography>
              <Typography>Assistant Manager - HR</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Company Name
              </Typography>
              <Typography>XXY Company Name</Typography>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" color="text.secondary">
            About Me
          </Typography>
          <Typography variant="body2">
            Microsoft enables digital transformation for the era of an
            intelligent cloud and an intelligent edge. Its mission is to empower
            every person and every organization on the planet to achieve more.
            Microsoft set up its India operations in 1990. Microsoft in India
            offers its global cloud services from local data centers to
            accelerate digital transformation across Indian start-ups,
            businesses, and government agencies.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
