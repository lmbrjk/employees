import React, { useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form } from "react-final-form";

import { Grid, Button, Typography, makeStyles } from "@material-ui/core/";

// для приведения даты к формату yyyy-mm-dd
import { changeDateFormat } from "../commons/date";
// для рендера инпутов в зависимости от typeField
import { renderInputs } from "../commons/renderInputs";

const useStyles = makeStyles({
  borderLeft: {
    borderLeft: "1px solid black",
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.surname) {
    errors.surname = "Поле должно быть заполнено";
  }
  return errors;
};

export default function ChangeItem({
  currentUser,
  inputs,
  match,
  sidebarSwitch,
  changeItem,
}) {
  // sidebarSwitch - функция изменяющая sidebarShow в компоненте List

  // для добавления стилей компонентам material ui
  const classes = useStyles();

  const submitForm = useCallback(
    (formData) => {
      const payload = {
        id: currentUser.id,
        // пришло из формы
        ...formData,
      };

      // проверка - если дата рождения не менялась, то ее приводить к формату не нужно
      if (payload.birthday !== currentUser.birthday) {
        // приведение даты к формату yyyy-mm-dd
        payload.birthday = changeDateFormat(payload.birthday);
      }

      changeItem(payload);
    },
    [currentUser, changeItem]
  );

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
          Изменить информацию о сотруднике
        </Typography>
      </Grid>
      <Grid item>
        <Form
          validate={validate}
          // чтобы поля были заполнены текущими значениями (до изменения)
          initialValues={currentUser}
          onSubmit={submitForm}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                spacing={3}
              >
                {inputs.map((input) => (
                  <Grid key={input.nameField} item>
                    {renderInputs(input.typeField, input)}
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
                    <Button type="submit" variant="contained" color="primary">
                      Сохранить
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/list"
                      onClick={() => sidebarSwitch(false)}
                      variant="contained"
                      color="primary"
                    >
                      Выйти
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
}
