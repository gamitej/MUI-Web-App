import { Box } from "@mui/material";
import React from "react";
import FeedPost from "./subcomp/FeedPost";
import { listPost } from "../DataArray/ArrayList";

const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
        {listPost.map((item) => (
          <FeedPost item={item} />
        ))}
      </Box>
    </>
  );
};

export default Feed;
