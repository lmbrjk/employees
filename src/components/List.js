import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import ListItem from "./ListItem"
import Info from "./Info"
import ChangeItem from "./ChangeItem"

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { GridList } from "@material-ui/core"

function Items(){

    const items = useSelector(state => state.items.items);

    // на основе этого будет производиться фильтрация скрытых полей
    const activeFields = useSelector(state => state.fields.inputs.filter(field => field.hidden === false));

    if(!items.length){
        return <p>Сотрудников нет</p>
    }


    return (
        <Grid container>            
            <Grid item>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"

                    spacing={2}
                >
                    <Grid item>№</Grid>
                    {
                        activeFields.map( field =>
                            <Grid item>{field.labelField}</Grid>
                        )
                    }
                </Grid>
                <GridList>
                    {items.map( (item, index) => <ListItem activeFields={activeFields} item={item} key={index} index={index} />)}
                </GridList>
            </Grid>
            <Grid item>
                <Switch>
                    <Route path="/list/info/:id" component={ Info } />
                    <Route path="/list/edit/:id" component={ ChangeItem } />
                </Switch>
            </Grid>
        </Grid>
    );
}

export default connect()(Items)