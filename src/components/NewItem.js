import React from "react"
import {connect} from "react-redux"
import {createItem} from "../redux/actions"

class NewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            number: ""
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const {name, surname, number} = this.state;

        //небольшая проверка на незаполненные поля
        if(!name.trim() || !surname.trim() || !number.trim()){
            return
        }

        const newItem = {
            name, surname, number
        }

        //изменяем state
        this.props.createItem(newItem);

        this.setState({
            name: "",
            surname: "",
            number: ""
        })
        
    }

    changeInputHandler = event => {
        event.persist();
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value,
            [event.target.surname]: event.target.value,
            [event.target.number]: event.target.number,
        }}));
    }

    render() {
        return (
        <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="Имя"
                name="name"
                
                value={this.state.name}
                onChange={this.changeInputHandler}
            />
            <input type="text" placeholder="Фамилия"
                name="surname"
                
                value={this.state.surname}
                onChange={this.changeInputHandler}
            />
            <input type="number" placeholder="Табельный номер"
                name="number"
                
                value={this.state.number}
                onChange={this.changeInputHandler}
            />
            <button type="submit">Создать</button>
        </form>
    )}
}

export default connect(null, {createItem})(NewItem)