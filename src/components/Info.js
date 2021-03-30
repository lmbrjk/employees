import React from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

function Info( {match, sidebarSwitch, sidebarShow} ){
    // sidebarSwitch - функция изменяющая sidebarShow в компоненте List
    // sidebarShow - отвечает за показ/скрытие бокового меню    

    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const fields = useSelector(state => state.fields.inputs);
    
    if(user === undefined){
        return <Redirect to="/" />
    }    
 
    return (
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"

            spacing={3}
        >
            <Grid item lg={12}>
                <Typography 
                    component="h1"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                >
                    Информация о сотруднике
                </Typography>
            </Grid>            
            {
                fields.map(field =>
                    <Grid item lg={12} key={user[field.nameField]}>
                        <Typography
                            component="h5"
                            variant="subtitle2"
                            color="inherit"
                            gutterBottom
                        >
                            {field.labelField}
                        </Typography>
                        <Typography>
                            {user[field.nameField]}
                        </Typography>
                    </Grid>               
                )
            }
            <Grid container item
                item lg={12}

                direction="row"
                justify="space-around"
                alignItems="center"
            >           
                <Button component={ Link } to="/list" 
                    onClick={ () => sidebarSwitch(sidebarShow = false)} variant="contained" color="primary"
                >
                    Закрыть
                </Button>
                <Button component={ Link } to={"/list/edit/" + match.params.id} variant="contained" color="primary">
                    Изменить
                </Button>
            </Grid>
        </Grid>
    )
}

export default connect()(Info);