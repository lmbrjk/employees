import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button';


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
            <Button type="submit" component={ Link } to="/" variant="contained" color="primary">
                Сохранить и вернуться в список
            </Button>
            <Button type="submit" component={ Link } to="/new" variant="contained" color="primary">
                Сохранить и добавить еще
            </Button>
        </form>
    )
}

export default connect()(NewItem)