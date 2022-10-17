import React from "react";
import { Link } from "react-router-dom";

import { TableCell, TableRow } from "@material-ui/core/";

export default function ItemList({ activeFields, item, index, sidebarSwitch }) {
  // activeFields - активные поля
  // item - данные о выбранном сотруднике
  // index - порядковый номер под которым будет отображаться сотрудник
  // sidebarSwitch - функция изменяющая sidebarShow в компоненте List
  // sidebarShow - отвечает за показ/скрытие бокового меню
  return (
    <TableRow
      onClick={() => sidebarSwitch(true)}
      component={Link}
      to={`/list/info/${item.id}`}
    >
      <TableCell>{index + 1}</TableCell>
      {activeFields.map((field) => (
        <TableCell key={field.nameField}>{item[field.nameField]}</TableCell>
      ))}
    </TableRow>
  );
}
