import React from "react"
import { Link } from "react-router-dom"

class Info extends React.Component{ 
    
    
    

    changeData = () => {
        console.log(this.props.match.params.id);
        // dispatch({type:"CHANGE_ITEM", payload: });
    }
    
    render(){
        return (
            <div>Info</div>
            // <div>
            //     <span onClick={()=> changeData()}style={{margin:"10px"}}>{user.name}</span>
            //     <span style={{margin:"10px"}}>{user.surname}</span>
            //     <span style={{margin:"10px"}}>{user.number}</span>
            //     <Link to="/">Закрыть</Link>
            // </div>
        )
    }
}
export default Info;