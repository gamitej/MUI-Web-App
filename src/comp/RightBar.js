import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
