import React from "react";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import CardContentCmp from "../components/cardContent.js";
import CardActionsCmp from "../components/cardActions.js";
import { useStyles } from "../App.js";

/**
 * The inputs of this function component allow you to send all the necessary information from higher levels of the code.
 * This allows the reuse of this component, without repeating code.
 *  * 
 * Name: CardCmp - This function render a card the blog post
 * @alt_cmp : Text to describe the blog image
 * @image : Link to the blog image
 * @title : Title to the card
 * @content2 : Description of the card
 * @img_author : Link to author profile image 
 * @name : Name of the autor
 * @date : Date of the post
 * 
 * Retunrn: A component render 
 */
function CardCmp({ alt_comment, image, title, content2, img_author, name, date, }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt={alt_comment}
            height="140"
            image={image}
            title={title}
          />
          <CardContentCmp
            content1={title}
            content2={content2}
          ></CardContentCmp>
        </CardActionArea>
        <CardActionsCmp
          actionCmp={classes.cardActions}
          authorCmp={classes.author}
          img_author={img_author}
          name={name}
          date={date}
        ></CardActionsCmp>
      </Card>
    </Grid>
  );
}

export default CardCmp;