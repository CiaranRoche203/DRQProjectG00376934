import React from 'react';
import { Players } from './players';
import axios from 'axios';
//class that represents the squad page
export class Squad extends React.Component {
    //constructor
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    //state object which takes information similar to json data format.
    //now state has been set to an empty string
    state = {
        player: []
    };
    //get the data from the api
    //uses a catch try error 
    componentDidMount() {
        //using axios, use a get method to retrieve the json data from the server. also add the new player to the server
        axios.get('http://localhost:4000/api/myteam')
        //response to the actions of the user
            .then((response) => {
                this.setState({ player: response.data })
            }
            )
            //error should this fail
            .catch(
                (error) => { console.log(error) }
            );
    }
    ReloadData(){
        //using axios, use a get method to retrieve the json data from the server. 
        axios.get('http://localhost:4000/api/myteam')
        //response to the actions of the user
            .then((response) => {
                this.setState({ player: response.data })
            }
            )
            //error should this fail
            .catch(
                (error) => { console.log(error) }
            );
    }
//calling reload data by passing it down in code below
    render() {
        return (
            <div>
                <h1>Meet the squad for the New Season!</h1>
                <Players player={this.state.player} ReloadData={this.ReloadData}></Players>
            </div>
        );
    } 
}