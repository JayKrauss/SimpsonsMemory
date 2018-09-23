import React from 'react';
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className ='charactercard col-sm-2' key={props.id } onClick={ () => props.handleClickEvent(props.id, props.clicked) }>
    <img id={props.name} alt={props.name} src={props.picture} />
    </div>
)

export default CharacterCard;