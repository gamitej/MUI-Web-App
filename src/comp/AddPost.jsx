import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import React from "react";

const AddPost = () => {
  return (
    <>
      <Tooltip title="Add New Post" sx={{ position: "fixed" ,bottom:20}} >
        <Fab color="primary" aria-label="add">
          <Add/>
        </Fab>
      </Tooltip>
    </>
  );
};

export default AddPost;
