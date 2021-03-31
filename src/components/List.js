import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import ListItem from "./ListItem"
import Info from "./Info"
import ChangeItem from "./ChangeItem"

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";


function Items({match}){

    const items = useSelector(state => state.items.items);

    // на основе этого будет производиться фильтрация скрытых полей
    const activeFields = useSelector(state => state.fields.inputs.filter(field => field.hidden === false));

    // если sidebarShow = true - список отображается на всю страницу
    // если sidebarShow = false - размер списка уменьшается и сбоку отображается меню
    let [sidebarShow, sidebarSwitch] = useState(false);
    
    if(!items.length){
        return  <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                    Сотрудников нет
                </Typography>;
    }

    return (
        <Grid container
            direction="row"
            justify="space-around"
            alignItems="flex-start"

            spacing={5}
        >
            <Grid item
                // 7 - размер с боковым меню
                // 12 - без бокового меню
                lg={ sidebarShow ? 7 : 12 }
            >          
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                {
                                    activeFields.map( field =>
                                        <TableCell key={field.nameField}>
                                            {field.labelField}
                                        </TableCell>
                                    )
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                items.map( (item, index) => 
                                    <ListItem 
                                        sidebarSwitch={sidebarSwitch} 
                                        activeFields={activeFields} 
                                        item={item} key={index} index={index} 
                                    />
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            { 
                // при перезагрузке sidebarShow = true если до перезагрузки было открыто боковое меню
                sidebarShow ?
                (<Grid item
                    lg={5}
                >
                    <Switch>
                        <Route path="/list/info/:id" render={(props)=><Info sidebarSwitch={sidebarSwitch} {...props}/>} />
                        <Route path="/list/edit/:id" render={(props)=><ChangeItem sidebarSwitch={sidebarSwitch} {...props}/>}/>
                    </Switch>
                </Grid>)
                : <Redirect to="/list" />
            }
        </Grid>
    );
}

export default connect()(Items)