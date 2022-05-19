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

const listRightBarFriends = [
  {
    alt: "Remy Sharp",
    src: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    alt: "Travis Howard",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    alt: "Agnes Walker",
    src: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    alt: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/5.jpg",
  },
];

const RightBar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={4}>
            {listRightBarFriends.map((item) => (
              <Avatar
                alt={item.alt}
                src={item.src}
              />
            ))}
          </AvatarGroup>
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
          <Typography variant="h6" fontWeight={100}>
            Latest Conversations
          </Typography>
          <LatestConvo />
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
