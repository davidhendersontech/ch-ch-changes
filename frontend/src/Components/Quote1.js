import React from 'react'

export default function Quote1(props) {

    

    return (
        <div className="quote-1">
            <section className="card">
                <img src={props.quote.image_url} alt={props.quote.quote}></img>
                <h1>{props.quote.quote} </h1>
                <button onClick={() => props.incrementIndex() } className="button">Cha Cha Cha Changes</button>
            </section>
        </div>
    )
}
