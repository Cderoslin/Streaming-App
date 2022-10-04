import * as React from 'react';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  copyright: {
    color: '#8d8c8e',
    padding: theme.spacing(2, 0, 7, 0.5),
  },
  footer: {
    backgroundColor: '#414141',
    padding: theme.spacing(5, 20),
  },
  footerLink: {
    color: '#bab5b6',
    cursor: 'pointer',
    padding: theme.spacing(0),
  },
  social: {
    cursor: 'pointer',
    height: '45px',
    margin: theme.spacing(0),
  },
  store: {
    cursor: 'pointer',
    maxHeight: '150px',
    maxWidth: '150px',
    padding: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const footerLinks = [
    { id: 1, title: 'Home', url: '#' },
    { id: 2, title: 'Terms and Conditions', url: '#' },
    { id: 3, title: 'Privacy Policy', url: '#' },
    { id: 4, title: 'Collection Statement', url: '#' },
    { id: 5, title: 'Help', url: '#' },
    { id: 6, title: 'Manage Account', url: '#' },
  ];
  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid container>
          {footerLinks.map((link) =>
            link.title !== 'Manage Account' ? (
              <Grid item key={link.title}>
                <Link className={classes.footerLink} variant='h5'>
                  {` ${link.title}`} |
                </Link>
              </Grid>
            ) : (
              <Grid item key={link.id} className={classes.footerNav}>
                <Link
                  className={classes.footerLink}
                  href={link.url}
                  variant='h5'
                >
                  {link.title}
                </Link>
              </Grid>
            )
          )}
        </Grid>
        <Grid container>
          <Typography variant='h6' className={classes.copyright}>
            Copyright &copy; 2016 Demo Streaming. All Rights Reserved
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4} md={2}>
            <img
              src='/assets/social/facebook-white.svg'
              alt='FaceBook'
              className={classes.social}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src='/assets/social/twitter-white.svg'
              alt='Twitter'
              className={classes.social}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src='/assets/social/instagram-white.svg'
              alt='Instagram'
              className={classes.social}
            />
          </Grid>

          <Grid item xs={4} md={2}>
            <img
              src='/assets/store/app-store.svg'
              alt='App Store'
              className={classes.store}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src='/assets/store/play-store.svg'
              alt='Play Store'
              className={classes.store}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src='/assets/store/windows-store.svg'
              alt='Windows Store'
              className={classes.store}
            />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
