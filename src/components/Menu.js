import React from "react"
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles({
    opacity: { 
        opacity: "1"
    }
});

const menuItems = [
    { itemLabel: "Список сотрудников", linkTo: "/list"},
    { itemLabel: "Создать", linkTo: "/new"},
    { itemLabel: "Настройки", linkTo: "/settings"}
];

export default function Menu({sidebarSwitch}){
    // для добавления стилей компонентам material ui
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Tabs textColor='inherit' value={false}>
                {
                    menuItems.map( (item, index) => 
                        <Tab 
                            key={index} 
                            component={Link} 
                            label={item.itemLabel} 
                            to={item.linkTo}
                            className={classes.opacity}
                            onClick={ () => sidebarSwitch(false)}
                        />
                    )
                }
            </Tabs>
      </AppBar>
    )
}