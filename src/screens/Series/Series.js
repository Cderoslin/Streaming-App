import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { fetchPrograms } from '../../actions/programActions';

const useStyles = makeStyles((theme) => ({
  grid: {
    cursor: 'pointer',
    padding: theme.spacing(1),
    maxWidth: 200,
  },
  cardContent: {
    paddingLeft: theme.spacing(0.5),
  },
  container: {
    padding: theme.spacing(10, 15),
  },
  link: {
    textDecoration: 'none',
  },
  media: {
    height: 'auto',
    maxWidth: '100%',
  },
  message: {
    padding: theme.spacing(0.5, 8),
  },
  title: {
    color: '#000',
    maxMidth: '25px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const Series = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const program = useSelector((state) => state.program);
  const { loading, error, programs } = program;

  React.useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  return (
    <Grid container className={classes.container}>
      {loading ? (
        <Typography variant='h5' className={classes.message}>
          Loading...
        </Typography>
      ) : error ? (
        <Typography variant='h5' className={classes.message}>
          Oops, something went wrong...
        </Typography>
      ) : (
        programs
          .filter(
            (program) =>
              program.releaseYear >= 2010 && program.programType === 'series'
          )
          .slice(0, 21)
          .sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
          .map((program) => (
            <Grid item className={classes.grid}>
              <Card>
                <CardMedia
                  component='img'
                  alt={program.title}
                  className={classes.media}
                  image={program.images['Poster Art'].url}
                  title={program.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.title}>
                    {program.title.length > 20
                      ? `${program.title.slice(0, 20)}...`
                      : program.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
      )}
    </Grid>
  );
};

export default Series;
