import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//player item class of the app
export class PlayerItem extends React.Component {
    //returns the player name, age and poster, in a card format that is imported from bootstrap
    //information is accessed from the object in the squad class
    //create an edit button so the user may edit player details.
  
    //constructor
    constructor(){
        super();
        this.DeletePlayer = this.DeletePlayer.bind(this);
        }
    //delete player method in order to take the data that you want to be deleted from the server
    DeletePlayer(e){
        //makes event cancellable
        e.preventDefault();
        console.log("Delete: "+this.props.player._id);
        //callling delete and url passing the id and remove from database
        axios.delete("http://localhost:4000/api/myteam/" + this.props.player._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }
    render() {
        return (
            <div style={{
                display: "inline-flex",
                justifyContent: "center",
                backgroundColor: "FireBrick",
                alignItems: "center",
                
              }}>
                
                <Card> 
                    <Card.Header>{this.props.player.name}</Card.Header>
                    <Card.Body>
                        {
                            //just displaying the details of the player. Also displays button that the user 
                            //can utilise should they wish to edit/ delete a player
                        }
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.player.image} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.player.age}</p>
                            </footer>
                            <br></br>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/editplayer/"+this.props.player._id} className="btn btn-primary" >Edit</Link>
                    <Button variant="danger" size="lg" onClick={this.DeletePlayer}>
                        Delete
                    </Button>
                    
                </Card>
            </div>
        );
    }
}
