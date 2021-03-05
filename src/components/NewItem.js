import React from "react"

export default class NewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: ""
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const {name, surname} = this.state;

        const newItem = {
            name, surname
        }

        console.log(newItem);

        this.setState({
            name: "",
            surname: ""
        })
        
    }

    changeInputHandler = event => {
        event.persist();
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value,
            [event.target.surname]: event.target.value,
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
            <button type="submit">Создать</button>
        </form>
    )}
}