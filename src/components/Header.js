import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      color: "gray",
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title} variant="h4">
        Employee Hours Tracker
      </Typography>
    </Container>
  );
};

export default Header;
