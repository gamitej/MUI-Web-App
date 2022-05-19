import { Add } from "@mui/icons-material";
import { Box, Fab, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add New Post"
        sx={{
          position: "fixed",
          bottom: 20,
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>hello</Box>
      </Modal>
    </>
  );
};

export default AddPost;
