import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFav } from "../../redux/actions/getUsers";
import Button from "@material-ui/core/Button";
import StarsIcon from "@material-ui/icons/Stars";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 10,
  },
  media: {
    height: 140,
  },
});

const Contact = () => {
  const classes = useStyles();

  const Dispatch = useDispatch();
  const selected = useSelector((state) => state.userData.selected);
  const favorites = useSelector((state) => state.userData.favourties);

  const isFavorite = favorites.includes(selected);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={selected.avatar}
          title={`User: ${selected.first_name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${selected.first_name} ${selected.last_name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {selected.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          startIcon={<StarsIcon />}
          variant="contained"
          color="primary"
          onClick={() => Dispatch(addToFav(selected.id))}
          disabled={isFavorite}
        >
          Add To Favourties
        </Button>
      </CardActions>
    </Card>
  );
};
export default Contact;
