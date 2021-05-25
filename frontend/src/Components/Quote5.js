import React from 'react'

export default function Quote5(props) {
    return (
        <div>
            <img src={props.quote.image_url} alt={props.quote.quote}></img>
            <h1>{props.quote.quote} </h1>
        </div>
    )
}
