import React, { useMemo } from "react";
import { Switch, Route } from "react-router-dom";

import ListItem from "./ListItem";
import Info from "../containers/Info";
import ChangeItem from "../containers/ChangeItem";

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core/";

export default function Items(props) {
  // если sidebarShow = true - список отображается на всю страницу
  // если sidebarShow = false - размер списка уменьшается и сбоку отображается меню

  const { items, inputs, sidebarSwitch, sidebarShow } = props;

  const activeFields = useMemo(
    () => inputs.filter((field) => field.hidden === false),
    [inputs]
  );

  if (!items.length) {
    return (
      <Typography component="h1" variant="h5" color="inherit" gutterBottom>
        Сотрудников нет
      </Typography>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
      spacing={5}
    >
      <Grid
        item
        // 8 - размер с боковым меню
        // 12 - без бокового меню
        lg={sidebarShow ? 8 : 12}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                {activeFields.map((field) => (
                  <TableCell key={field.nameField}>
                    {field.labelField}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <ListItem
                  sidebarSwitch={sidebarSwitch}
                  activeFields={activeFields}
                  item={item}
                  key={index}
                  index={index}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item lg={4}>
        <Switch>
          <Route
            exact
            path="/list/info/:id"
            render={(props) => (
              <Info sidebarSwitch={sidebarSwitch} {...props} />
            )}
          />
          <Route
            exact
            path="/list/edit/:id"
            render={(props) => (
              <ChangeItem sidebarSwitch={sidebarSwitch} {...props} />
            )}
          />
        </Switch>
      </Grid>
    </Grid>
  );
}
