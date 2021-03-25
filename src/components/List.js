import React from "react"
import {connect} from "react-redux"
import ListItem from "./ListItem"
import Info from "./Info"
import ChangeItem from "./ChangeItem"
import { Switch, Route, Link } from "react-router-dom"


// items передается из mapStateToProps
const Items = ({ items }) => {
    if(!items.length){
        return <p>Сотрудников нет</p>
    }

    return (       
        
        <div>
            <Link to="/">Закрыть</Link>
            <ul>
                {items.map( (item, index) => <ListItem item={item} key={index} index={index} />)}
            </ul>
            <Switch>
                <Route path="/list/info/:id" component={Info} />
                <Route path="/list/edit/:id" component={ChangeItem} />
            </Switch>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        // присваиваем items значение из стейта state.items.items
        items: state.items.items
    };
}

export default connect(mapStateToProps, null)(Items)