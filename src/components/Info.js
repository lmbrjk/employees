import React from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

function Info({ match }){     
    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const fields = useSelector(state => state.fields.inputs);
    
    if(user === undefined){
        return <Redirect to="/" />
    }    
 
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography 
                    component="h1"
                    color="inherit"
                    gutterBottom
                >
                    Информация о сотруднике
                </Typography>
            </Grid>
            {
                fields.map(field =>
                    <div key={user[field.nameField]} style={{margin:"10px"}}>               
                        <label>
                            {field.labelField}
                            <span>{user[field.nameField]}</span>
                        </label>
                    </div>                        
                )
            }
            
            <Button component={ Link } to="/list/" variant="contained" color="primary">
                Закрыть
            </Button>
            <Button component={ Link } to={"/list/edit/" + match.params.id} variant="contained" color="primary">
                Изменить
            </Button>
        </Grid>
    )
}

export default connect()(Info);