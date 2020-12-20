import React from 'react';
import { PlayerItem } from './playerItem';
//players class of the app
export class Players extends React.Component{
//arrow function to obtain the players data from players
//pass method from child read to players, then calling it
    render(){
        return this.props.player.map( (player)=>{
            return <PlayerItem player ={player} ReloadData={this.props.ReloadData}></PlayerItem>
        })
    }
}
