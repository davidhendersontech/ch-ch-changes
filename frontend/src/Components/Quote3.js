import React from 'react'

export default function Quote3(props) {
    return (
        <div className="quote-3">
            <img src={props.quote.image_url} alt={props.quote.quote}></img>
            <h1>{props.quote.quote} </h1>
            <button onClick={() => props.incrementIndex()} className="button">Cha Cha Cha Changes</button>
            <footer>
                <img className="taskbar" src="https://files.catbox.moe/uj7kun.png" alt="taskbar" ></img>
            </footer>
        </div>
    )
}
