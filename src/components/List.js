import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import ListItem from "./ListItem"
import Info from "./Info"
import ChangeItem from "./ChangeItem"

import Grid from '@material-ui/core/Grid';
import { GridList } from "@material-ui/core"

function Items(){

    const items = useSelector(state => state.items.items);

    // на основе этого будет производиться фильтрация скрытых полей
    const activeFields = useSelector(state => state.fields.inputs.filter(field => field.hidden === false));

    if(!items.length){
        return <p>Сотрудников нет</p>
    }   


    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >            
            <Grid item
                xs={7}
            >
                <Grid container item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"

                    spacing={2}
                >
                    <Grid item
                        xs={12 / (activeFields.length + 1)}
                    >№</Grid>
                    {
                        activeFields.map( field =>
                            <Grid item
                                xs={12 / (activeFields.length + 1)}
                            >
                                {field.labelField}
                            </Grid>
                        )
                    }
                </Grid>
                <GridList>
                    {items.map( (item, index) => <ListItem activeFields={activeFields} item={item} key={index} index={index} />)}
                </GridList>
            </Grid>
            <Grid item
                xs={5}
            >
                <Switch>
                    <Route path="/list/info/:id" component={ Info } />
                    <Route path="/list/edit/:id" component={ ChangeItem } />
                </Switch>
            </Grid>
        </Grid>
    );
}

export default connect()(Items)