import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/Button";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  cardContent: {
    textAlign: "left"
  },
  likeButton: {
    color: "red",
    position: "relative"
  },
  iconButton: {
    padding: 0
  },
  day: {
    textAlign: "right",
    fontSize: "10px",
    color: "gray",
    position: "absolute",
    "padding-right": "inherit",
    right: "8px"
  },
  cardActions: {
    position: "relative"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { id, imgSrc, description, heading, day } = props;

  const [likes, setLikes] = useState(0);

  const onLikeHandler = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className={classes.card} key={id}>
      <CardActionArea>
        <CardMedia component="img" height="240" image={imgSrc} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          {/* <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            className={classes.day}
          >
            Posted on | {day}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <IconButton
          aria-label="like"
          size="medium"
          color="black"
          onClick={onLikeHandler}
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="comment" size="medium" color="black">
          <AddCommentOutlinedIcon />
        </IconButton>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          className={classes.day}
        >
          Posted on | {day}
        </Typography>
      </CardActions>
    </Card>
  );
}
