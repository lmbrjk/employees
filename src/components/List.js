import React from "react"
import {connect} from "react-redux"
import ListItem from "./ListItem"


const Items = ({ items }) => {
    if(!items.length){
        return <p>Сотрудников нет</p>
    }

    return items.map( (item, index) => <ListItem item={item} key={index}/>)
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, null)(Items)