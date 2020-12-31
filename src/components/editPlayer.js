import React from 'react';
import axios from 'axios';
//edit class of the app
export class EditPlayer extends React.Component {
    //edit component
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
    //life cycle hook that gets fired. Becomes active in the view
    componentDidMount(){
        console.log(this.props.match.params.id);
        //read record from database
        //call get request and return to document
        axios.get('http://localhost:4000/api/myteam/'+ this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Age:response.data.age,
                Number:response.data.number,
                Image:response.data.image
            })
        })
        .catch((error)=>{
            console.log(error);
        });
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
    //the number that is added is stored here in the target value
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
            image: this.state.Image,
            _id: this.state._id
        }
        //put method. this returns the updated player
        axios.put('http://localhost:4000/api/myteam/'+this.state._id, newPlayer)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
    }
    render() {
        return (
            //forms that have been made with react features
            //edit player name, age, squad number and poster
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                        <label>
                            Player Name:
                    </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label> Player Age</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Age}
                            onChange={this.onChangeAge}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Squad Number</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Number}
                            onChange={this.onChangeNumber}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Player Image</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Edit Player'
                            className='btn btn-primary'
                        ></input>

                    </div>
                </form>
            </div>
        );
    }
}
