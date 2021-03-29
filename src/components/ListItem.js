import React from "react"
import { Link } from "react-router-dom"

import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

function ItemList({ activeFields, item, index }){    
    // activeFields - активные поля
    // item - данные о выбранном сотруднике
    // index - порядковый номер под которым будет отображаться сотрудник
    return (       
        <ListItem button component={Link} to={`/list/info/${item.id}`}>
            
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"

                    spacing={2}
                >
                    <Grid item>
                        {index + 1}
                    </Grid>                    
                    {
                        activeFields.map(field => ( 
                            <Grid item key={item[field.nameField]}>{item[field.nameField]}</Grid>
                        ))
                    }                        
                </Grid>
            
        </ListItem>
    )
}

export default ItemList;