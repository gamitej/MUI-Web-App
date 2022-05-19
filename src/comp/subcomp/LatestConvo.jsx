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

const listLatestConvo = [
  {
    alt: "Remy Sharp",
    src: "/static/images/avatar/1.jpg",
    primary: "Brunch this weekend?",
    typo: "Ali Connors",
    text: " — I'll be in your neighborhood doing errands this…",
  },
  {
    alt: "Travis Howard",
    src: "/static/images/avatar/2.jpg",
    primary: "Summer BBQ",
    typo: "to Scott, Alex, Jennifer",
    text: " — Wish I could come, but I'm out of town this…",
  },
  {
    alt: "Cindy Baker",
    src: "/static/images/avatar/3.jpg",
    primary: "Oui Oui",
    typo: "Sandra Adams",
    text: " — Do you have Paris recommendations? Have you ever…",
  },
];

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
