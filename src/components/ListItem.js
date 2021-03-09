import React from "react"
import Info from "./Info"

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export default ({ item }) => {
    return (
        <Router>
            <li>            
                <Link to="/info/:info">{item.name} {item.surname} {item.number}</Link>
            </li>
            <Switch>
                <Route path="/info/:info" component={Info} />
            </Switch>
        </Router>
    )
}