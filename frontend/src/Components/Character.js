import React from 'react'

export default function Character(props) {
    return (
        <div className="character-card">
            <h1>{props.character.name}</h1>
            <img src={props.character.image} alt={props.character.name}/>

        </div>
    )
}
