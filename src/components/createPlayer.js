import React from 'react';
import axios from 'axios';
//create class of the app
export class CreatePlayer extends React.Component {
    //create component
    //constructor
    constructor() {
        super();
        //binding the data so it can be called
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        //setting to empty strings
        this.state = {
            Name: '',
            Age: '',
            Number: '',
            Image: ''
        }
    }
    //methods
    //when the name has been added it is returned or stored here
    onChangeName(e) {
        this.setState({ Name: e.target.value });
    }
    //when the age has been added it is returned or stored here
    onChangeAge(e) {
        this.setState({ Age: e.target.value });
    }
    //when the Image has been added it is returned or stored here
    onChangeImage(e) {
        this.setState({ Image: e.target.value });
    }
    onChangeNumber(e) {
        this.setState({ Number: e.target.value });
    }
    //alert returned to user to show that the player has been added
    onSubmit(e) {
        e.preventDefault();
        alert("Player: " + this.state.Name + " " + this.state.Age + " " + this.state.Image + " " + this.state.Number);
        console.log('test');
        const newPlayer = {
            name: this.state.Name,
            age: this.state.Age,
            number: this.state.Number,
            image: this.state.Image
        }
        //using the local host aka the server to retrieve the information
        axios.post('http://localhost:4000/api/myteam',newPlayer)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            //forms that have been made with react features
            //add players name, age, number and poster
            <div className='App' style={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: "url(" +
                "https://wallpaperaccess.com/full/1127317.jpg" + ")",
                width: '1903px',
        height: '1000px',
                alignItems: "top"}}>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>
                            Player Name:
                    </label>
                        <input type='text'
                            className='form-control form-control-lg'
                            value={this.state.Name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label> Player Age</label>
                        <input type='text'
                            className='form-control form-control-lg'
                            value={this.state.Age}
                            onChange={this.onChangeAge}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Squad Number</label>
                        <textarea type='text'
                            className='form-control form-control-lg'
                            value={this.state.Number}
                            onChange={this.onChangeNumber}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Player Image</label>
                        <textarea type='text'
                            className='form-control form-control-lg'
                            value={this.state.Image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Player'
                            className='btn btn-success btn-lg btn-block'
                        ></input>

                    </div>
                </form>
            </div>
        );
    }
}
