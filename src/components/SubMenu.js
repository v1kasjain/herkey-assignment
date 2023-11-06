import { Box, Paper, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import React from "react";
import { subMenuItems } from "../constants";
function SubMenu() {
  return (
    <Box sx={{ position: "relative", top: 50 }}>
      <Paper >
        <Box display="flex" justifyContent="center" gap={1} py={1} px={"14px"}>
          {subMenuItems.map((item, index) => (
            <Typography
              variant="caption"
              noWrap
              component="div"
              color={item.id === 4 ? lightGreen[500] : grey[500]}
              sx={{ cursor: "pointer" }}
            >
              {item.name}
              {index === 3 ? (
                " "
              ) : (
                <Box display="inline" ml={1} color={grey[300]}>
                  |
                </Box>
              )}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

export default SubMenu;
