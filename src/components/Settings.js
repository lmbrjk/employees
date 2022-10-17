import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { Grid, Button, Typography, InputLabel } from "@material-ui/core/";

export default function Settings(props) {
  const { inputs: allFields, initialValues, changeFieldsList } = props;

  // return null;

  const submitForm = useCallback(
    (formData) => {
      const payload = {
        ...formData,
      };

      changeFieldsList(payload);
    },
    [changeFieldsList]
  );

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Typography component="h1" variant="h5" color="inherit" gutterBottom>
        Настройки
      </Typography>
      <Typography variant="subtitle2" color="inherit" gutterBottom>
        Выбранные поля не будут отображаться в списке сотрудников
      </Typography>
      <Form
        // определяем напротив каких свойств будет стоять галка при загрузке
        // свойство fields указано во всех чекбоксах name="fields"
        initialValues={{ fields: initialValues }}
        onSubmit={submitForm}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              {allFields.map((field, index) => (
                <Grid item key={index}>
                  <InputLabel>
                    {field.labelField}
                    <Field
                      type="checkbox"
                      name="fields"
                      component="input"
                      value={field.nameField}
                    />
                  </InputLabel>
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
                    name="back"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Сохранить
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    color="primary"
                  >
                    Закрыть
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Grid>
  );
}
