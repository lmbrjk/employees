import React from "react"
import { Link } from "react-router-dom"

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function ItemList({ activeFields, item, index, sidebarSwitch, sidebarShow }){    
    // activeFields - активные поля
    // item - данные о выбранном сотруднике
    // index - порядковый номер под которым будет отображаться сотрудник
    // sidebarSwitch - функция изменяющая sidebarShow в компоненте List
    // sidebarShow - отвечает за показ/скрытие бокового меню
    return (       
        <TableRow button 
            onClick={ () => sidebarSwitch(sidebarShow = true) } 
            component={Link} to={`/list/info/${item.id}`}
        >
            
            <TableCell>
                {index + 1}
            </TableCell>                    
            {
                activeFields.map(field => ( 
                    <TableCell item 
                        xs={12 / (activeFields.length + 1)}
                        key={field.nameField}
                    >
                        {item[field.nameField]}
                    </TableCell>
                ))
            }
            
        </TableRow>
    )
}

export default ItemList;