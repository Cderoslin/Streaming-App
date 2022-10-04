import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1.5),
  },
  container: {
    padding: theme.spacing(10, 23),
  },
  media: {
    height: 200,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.card}>
        <Card>
          <Link to='/series'>
            <CardMedia
              component='img'
              alt='Popular Series'
              className={classes.media}
              image='/assets/general/series.jpg'
              title='Popular Series'
            />
            <CardContent>
              <Typography>Popular Series</Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
      <Grid item className={classes.card}>
        <Card>
          <Link to='/movies'>
            <CardMedia
              component='img'
              alt='Popular Movies'
              className={classes.media}
              image='/assets/general/movies.jpg'
              title='Popular Movies'
            />
            <CardContent>
              <Typography>Popular Movies</Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
