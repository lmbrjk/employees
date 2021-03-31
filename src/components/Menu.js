import React from "react"
import { Link } from "react-router-dom"

import {AppBar, Tabs, Tab} from "@material-ui/core/";

const menuItems = [
    { itemLabel: "Список сотрудников", linkTo: "/list"},
    { itemLabel: "Создать", linkTo: "/new"},
    { itemLabel: "Настройки", linkTo: "/settings"}
];


function Menu(){
    return (
        <AppBar position="static">
            <Tabs>
                {
                    menuItems.map( (item, index) => 
                        <Tab 
                            key={index} 
                            component={Link} 
                            label={item.itemLabel} 
                            to={item.linkTo} 
                        />
                    )
                }
            </Tabs>
      </AppBar>
    )
}

export default Menu;