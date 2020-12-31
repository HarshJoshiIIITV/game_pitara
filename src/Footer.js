import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import logo from "./logo.png";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
    color: "white",
  },
  link: {
    color: "#8f99a3",
    fontSize: "14px",
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography
      component="footer"
      style={{ display: "flex", backgroundColor: "#111", color: "white" }}
    >
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <Link href="#">
                  <img src={logo} width={200} alt="logo" />
                </Link>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Menu
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Online Casino Games
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Casino Slot Games
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Casino Table Games
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Tournament
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Quick Links
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Brand Ambasder
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  FAQ
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Blog
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  Contact Us
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.link} href="#">
                  About us
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
