import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import { ReactComponent as IconEdit } from "../icons/edit.svg";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#99ca3b",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function ApplicationSettings(props) {
  const { loading = true } = props;

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
            Application Settings
          </Typography>
        }
        sx={{ backgroundColor: "#f8f8f8", fontSize: 16 }}
      ></CardHeader>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              Receive job applications via
            </Typography>
            <Box sx={{ mt: 1 }}>
              <FormControl>
                <RadioGroup
                  defaultValue="only"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel
                    value="only"
                    control={<BpRadio />}
                    label="Only on my dashboard"
                  />
                  <FormControlLabel
                    value="both"
                    control={<BpRadio />}
                    label="Email and on my dashboard"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Typography variant="caption" color="text.secondary">
              *Please note, this setting will not impact your old job postings
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ApplicationSettings;
