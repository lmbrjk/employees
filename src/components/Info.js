import React from "react";
import { Link, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  borderLeft: {
    borderLeft: "1px solid black",
  },
});

export default function Info(props) {
  // sidebarSwitch - функция изменяющая sidebarShow в компоненте List
  const { currentUser, inputs, sidebarSwitch } = props;

  // для добавления стилей компонентам material ui
  const classes = useStyles();

  if (currentUser === undefined) {
    return <Redirect to="/" />;
  } else {
    sidebarSwitch(true);
  }

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
      className={classes.borderLeft}
    >
      <Grid item>
        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
          Информация о сотруднике
        </Typography>
      </Grid>
      {inputs.map((field) => (
        <Grid item key={currentUser[field.nameField]}>
          <Typography
            component="h5"
            variant="subtitle2"
            color="inherit"
            gutterBottom
          >
            {field.labelField}
          </Typography>
          <Typography>{currentUser[field.nameField]}</Typography>
        </Grid>
      ))}
      <Grid
        container
        item
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Button
            component={Link}
            to="/list"
            onClick={() => sidebarSwitch(false)}
            variant="contained"
            color="primary"
          >
            Закрыть
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to={"/list/edit/" + currentUser.id}
            variant="contained"
            color="primary"
          >
            Изменить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
