import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: '#fff',
    position: 'static',
  },
  button: {
    backgroundColor: '#414141',
    color: '#fff',
    margin: theme.spacing(1.5, 10, 1.5, 2),
    padding: theme.spacing(1),
    textDecoration: 'none',
  },
  buttonText: {
    color: '#fff',
    cursor: 'pointer',
  },
  link: {
    color: '#fff',
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
  subHeader: {
    backgroundColor: '#414141',
    boxShadow: '0px 7px 5px #bfbfbf',
    padding: theme.spacing(1.5, 23),
  },
  toolbar: {
    backgroundColor: '#0079ff',
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    color: '#fff',
    flexGrow: 1,
    margin: theme.spacing(1.5, 20),
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Link to='/' className={classes.toolbarTitle}>
          <Typography variant='h3' color='inherit' noWrap>
            Demo Streaming
          </Typography>
        </Link>
        <Link to='login' className={classes.link}>
          <Typography variant='h6'>Log in</Typography>
        </Link>
        <Link className={classes.button}>
          <Button className={classes.buttonText}>Start your free trail</Button>
        </Link>
      </Toolbar>
      <Toolbar className={classes.subHeader}>
        <Typography variant='h4'>Popular Titles</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
