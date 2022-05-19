import { Box } from "@mui/material";
import React from "react";
import Post from './Post'
import {listPost} from '../DataArray/ArrayList'

const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
      {listPost.map(item=>(
        <Post item={item}/>
      ))}
        
      </Box>
    </>
  );
};

export default Feed;
