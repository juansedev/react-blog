import React from "react";
import { CardActionArea, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function CardContentCmp({ content1, content2 }) {
  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {content1}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content2}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
}

export default CardContentCmp;
