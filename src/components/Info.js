import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    borderLeft: { 
        borderLeft: "1px solid black"
    }
});

function Info( {match, sidebarSwitch} ){
    // sidebarSwitch - функция изменяющая sidebarShow в компоненте List  

    // для добавления стилей компонентам material ui
    const classes = useStyles();

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
            className={classes.borderLeft}
        >
            <Grid item>
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
                    <Grid item
                        key={user[field.nameField]}
                    >
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
            <Grid container
                item

                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
            >     
                <Grid item>  
                    <Button component={ Link } to="/list" 
                        onClick={ () => sidebarSwitch(false)} variant="contained" color="primary"
                    >
                        Закрыть
                    </Button>
                </Grid>    
                <Grid item>
                    <Button component={ Link } to={"/list/edit/" + match.params.id} variant="contained" color="primary">
                        Изменить
                    </Button>
                </Grid>    
            </Grid>
        </Grid>
    )
}

export default connect()(Info);