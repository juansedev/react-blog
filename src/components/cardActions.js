import React from "react";
import { Box, CardActions, Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function CardActionsCmp({ actionCmp, authorCmp, img_author, name, date }) {
  return (
    <CardActions className={actionCmp}>
      <Box className={authorCmp}>
        <Avatar src={img_author} />
        <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            {name}
          </Typography>
          <Typography variant="subtitle2" component="p" color="textSecondary">
            {date}
          </Typography>
        </Box>
      </Box>
      <Box>
        <BookmarkBorderIcon />
      </Box>
    </CardActions>
  );
}

export default CardActionsCmp;
