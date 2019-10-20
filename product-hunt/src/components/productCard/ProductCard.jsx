import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  cardContent: {
    textAlign: "left"
  },
  likeButton: {
    // height: "36px",
    // width: "36px",
    // minWidth: 0,
    // borderRadius: "100%"
    color: "red",
    position: "relative"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { id, imgSrc, description, heading } = props;
  return (
    <Card className={classes.card} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <IconButton
          aria-label="like"
          size="medium"
          className={classes.likeButton}
        >
          <FavoriteIcon />
        </IconButton>
    </Card>
  );
}
