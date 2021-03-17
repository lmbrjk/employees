import React from "react"
import { connect } from "react-redux"
import { createItem } from "../redux/actions"
import { Link } from "react-router-dom"

class NewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            middlename: "",
            surname: "",
            birthday: "",
            number: "",
            post: "",
            division: ""   
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const {name, middlename, surname, birthday, number, post, division} = this.state;

        //небольшая проверка на незаполненные поля
        if(!name.trim() || !middlename.trim() || !surname.trim() || !number.trim() || !post.trim() || !division.trim()){
            return
        }

        const newItem = {
            id: Date.now().toString(),
            name, middlename, surname, birthday, number, post, division
        }

        //изменяем state
        this.props.createItem(newItem);

        this.setState({
            name: "",
            middlename: "",
            surname: "",
            birthday: "",
            number: "",
            post: "",
            division: ""            
        })
        
    }

    changeInputHandler = event => {
        event.persist();
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value,
            [event.target.middlename]: event.target.value,
            [event.target.surname]: event.target.value,
            [event.target.birthday]: event.target.value,
            [event.target.number]: event.target.value,
            [event.target.post]: event.target.value,
            [event.target.division]: event.target.value            
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
            <input type="text" placeholder="Отчество"
                name="middlename"
                
                value={this.state.middlename}
                onChange={this.changeInputHandler}
            />
            <input type="text" placeholder="Фамилия"
                name="surname"
                
                value={this.state.surname}
                onChange={this.changeInputHandler}
            />
            <input type="date" placeholder="Дата рождения"
                name="birthday"
                
                value={this.state.birthday}
                onChange={this.changeInputHandler}
            />
            <input type="number" placeholder="Табельный номер"
                name="number"
                
                value={this.state.number}
                onChange={this.changeInputHandler}
            />
            <input type="text" placeholder="Должность"
                name="post"
                
                value={this.state.post}
                onChange={this.changeInputHandler}
            />
            <input type="text" placeholder="Отделение"
                name="division"
                
                value={this.state.division}
                onChange={this.changeInputHandler}
            />          
            <Link to="/">Закрыть</Link>
            <button type="submit">Создать</button>
        </form>
    )}
}

export default connect(null, {createItem})(NewItem)