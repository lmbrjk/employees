import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

function NewItem() {

    const dispatch = useDispatch();

    const allInputs = useSelector(state => state.fields.inputs);

    const [inputs] = useState(allInputs.filter(input => input.hidden === false));

    const [item, setLocalState] = useState({});
    

    // submitHandler = event => {
    //     event.preventDefault();

    //     const {name, middlename, surname, birthday, number, post, division} = this.state;

    //     //небольшая проверка на незаполненные поля
    //     if(!name.trim() || !middlename.trim() || !surname.trim() || !number.trim() || !post.trim() || !division.trim()){
    //         return
    //     }

    //     const newItem = {
    //         id: Date.now().toString(),
    //         name, middlename, surname, birthday, number, post, division
    //     }

    //     //изменяем state
    //     this.props.createItem(newItem);

    //     this.setState({
    //         name: "",
    //         middlename: "",
    //         surname: "",
    //         birthday: "",
    //         number: "",
    //         post: "",
    //         division: ""            
    //     })
        
    // }

    // const changeInput = (event) => {       
    //     setLocalInputs( 
    //         item => (
    //             {...item, 
    //             ...{[event.target.name]: event.target.value}
    //             }
    //         )
    //     );
    // }

    const changeInput = (event) => { 
        setLocalState(
            item => (
                {...item, 
                ...{[event.target.name]: event.target.value}
                }
            )
        );        
    }

    const payload = {
        id: Date.now().toString(),
        ...item
    };  

    const pushItem = (event) => {
        event.preventDefault();        

        dispatch({type: "CREATE_ITEM", payload});
    }

    
    return (
        <form onSubmit={pushItem}>
            { 
                inputs.map(input => (
                    
                    <label>
                        {input.labelField}
                        <input
                            onChange={changeInput} 
                            type={input.typeField}
                            name={input.nameField}

                            style={{margin:"10px"}}                                
                        />
                    </label>
                        
                ))             
            }
            <Link to="/">
                <button type="submit">Сохранить и вернуться в список</button>
            </Link>
            <Link to="/new">
                <button type="submit">Сохранить и добавить еще</button>
            </Link>
        </form>
    )
}

export default connect()(NewItem)