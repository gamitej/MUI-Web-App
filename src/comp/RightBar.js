import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { listRightBarPosts } from "../DataArray/ArrayList";
import LatestConvo from "./subcomp/LatestConvo";
import { listRightBarFriends } from "../DataArray/ArrayList";

const RightBar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          {/* Online Friends */}
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={4}>
            {listRightBarFriends.map((item) => (
              <Avatar alt={item.alt} src={item.src} />
            ))}
          </AvatarGroup>
          {/* Online Friends */}
          {/* Latest Posts */}
          <Typography variant="h6" fontWeight={100}>
            Latest Posts
          </Typography>
          <ImageList cols={3} gap={5} rowHeight={100}>
            {listRightBarPosts.map((item) => (
              <ImageListItem key={item.img}>
                <img src={`${item.src}`} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
          {/* Latest Posts */}
          {/* Latest Conversations */}
          <Typography variant="h6" fontWeight={100}>
            Latest Conversations
          </Typography>
          <LatestConvo />
          {/* Latest Conversations */}
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
