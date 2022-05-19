import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { listLatestConvo } from "../../DataArray/ArrayList";

const LatestConvo = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {listLatestConvo.map((item) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.alt} src={item.src} />
              </ListItemAvatar>
              <ListItemText
                primary={item.primary}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.typo}
                    </Typography>
                    {`${item.text}`}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
};

export default LatestConvo;
