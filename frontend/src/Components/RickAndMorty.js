import React from 'react'
import {useState, useEffect} from 'react'
import Character from './Character'
export default function RickAndMorty() {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(characters => {
                setCharacters(characters.results)
            })
    })

    const displayCharacters = () => {
        return characters.map(character => {
            return <Character character={character} key={character.id}/>
        })
    }

    return (
        <div className="character-container">
            {displayCharacters()}
        </div>
    )
}
