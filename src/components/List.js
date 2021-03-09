import React from "react"
import {connect} from "react-redux"
import ListItem from "./ListItem"


// items передается из mapStateToProps
const Items = ({ items }) => {
    if(!items.length){
        return <p>Сотрудников нет</p>
    }

    return items.map( (item, index) => <ListItem item={item} key={index} index={index} />);
}

const mapStateToProps = state => {
    return {
        // присваиваем items значение из стейта state.items.items
        items: state.items.items
    };
}

export default connect(mapStateToProps, null)(Items)