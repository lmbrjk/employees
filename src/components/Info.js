import React from "react"
import {connect} from "react-redux"
import { Link } from "react-router-dom"


  
class Info extends React.Component{ 
    
    constructor(props){

        super(props);

        this.state = this.props.items.find(item => 
            item.id === +this.props.match.params.id
        )
    }

    // .filter(item => item.id === +this.props.match.params.id)
    
    
    render(){        

        console.log(this.state)
        console.log(this.props.inputs)
        return (            
            <div>                
                <span style={{margin:"10px"}}>{this.state.name}</span>
                <span style={{margin:"10px"}}>{this.state.surname}</span>
                <span style={{margin:"10px"}}>{this.state.number}</span>
                <Link to="/">Закрыть</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        inputs: state.inputs.inputs
    };
};

export default connect(mapStateToProps, null)(Info);
