import React from "react"
import {connect} from "react-redux"
import {getItem} from "../redux/actions"
import { Link } from "react-router-dom"


  
class Info extends React.Component{ 
    
    constructor(props) {
        super(props) ;

        this.state = {};
    }

    // .filter(item => item.id === +this.props.match.params.id)
    
    render(){
        console.log(getItem(+this.props.match.params.id));

        return (
           
            <div>info</div>
            // <div>
            //     <span onClick={()=> changeData()}style={{margin:"10px"}}>{user.name}</span>
            //     <span style={{margin:"10px"}}>{user.surname}</span>
            //     <span style={{margin:"10px"}}>{user.number}</span>
            //     <Link to="/">Закрыть</Link>
            // </div>
        )
    }
}

export default connect()(Info);

