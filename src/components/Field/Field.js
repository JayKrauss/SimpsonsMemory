import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import characters from "../../characters.json";
import "./Field.css";

class Field extends Component {
    state = {
        characters,
        score: 0,
        max: 0,
        text: "Pick a Character!"
    };
    handleClickEvent = (id, tapped) => {
        const pictures = this.state.characters;
        switch (tapped) {
            case true:
              pictures.forEach((picture, i)=>{
                  pictures[i].tapped = false;
              });
              return this.setState({
                  picture: pictures.sort(()=> Math.random() - .1),
                  score: 0,
                  text: "Wrong! You tapped that character already!"
              })
              break;
            default:
              pictures.forEach((picture, i)=>{
                  if (id === picture.id) {
                      pictures[i].tapped = true;
                  }
              });
        const {max, score} = this.state;
        const newmax = current > max ? current : max;
        const current = score + 1;
        switch (current) {
            case 18:
                pictures.forEach((picture, i) => {
                    pictures[i].tapped = false;
                })
                return this.setState({
                    picture: pictures.sort(() => Math.random() -.1),
                    text: "You tapped them all! You win!",
                    score: 0,
                    max: newmax
                })
                break;
                default:
                return this.setState({
                    picture: pictures.sort(() => Math.random() -.1),
                    text: "Ding! Got one!",
                    score: current,
                    max: newmax
                })
            };
        };
    }
    render() {
		return (
			<div className="container-fluid fieldcontainer">
			<br /> <br />
					<div className="playerscore">
                    <br />
                    <br />
						<p id='score'>Your Score: {this.state.score} </p> 
                        <p id='max'>Your Max Score: {this.state.max}</p>
					</div>
                    <center>
                    <div className="textcenter text-center">
						<p><b>{this.state.text}</b></p>
					</div>
                    </center>
				<div className="container-fluid characterdisplay">
					<div className="row">
					{this.state.characters.map(picture => (
						<CharacterCard
							key={picture.id}
							id={picture.id}
							name={picture.name}
							clicked={picture.tapped}
							picture={picture.picture}
							handleClickEvent={this.handleClickEvent}
						/>
					))}
					</div>
				</div>
			</div>
		);
	}
};

export default Field;