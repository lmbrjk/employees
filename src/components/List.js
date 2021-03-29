import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import ListItem from "./ListItem"
import Info from "./Info"
import ChangeItem from "./ChangeItem"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'


// items передается из mapStateToProps
function Items(){

    const items = useSelector(state => state.items.items);
    const activeFields = useSelector(state => state.fields.inputs.filter(field => field.hidden == false));

    if(!items.length){
        return <p>Сотрудников нет</p>
    }


    return (
        <div>
            <Link to="/">Закрыть</Link>
            <ul>
                {items.map( (item, index) => <ListItem activeFields={activeFields} item={item} key={index} index={index} />)}
            </ul>
            <Switch>
                <Route path="/list/info/:id" component={Info} />
                <Route path="/list/edit/:id" component={ChangeItem} />
            </Switch>
        </div>
    );
}

export default connect()(Items)