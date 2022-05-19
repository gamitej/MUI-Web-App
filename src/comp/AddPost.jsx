import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import { Box, Fab, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

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
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="whitesmoke"
          p={3}
          borderRadius={5}
        >
          hello
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
