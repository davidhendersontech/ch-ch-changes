import React, { useState } from 'react'
import Quote1 from "./Quote1"
import Quote2 from "./Quote2"
import Quote3 from "./Quote3"
import Quote4 from "./Quote4"
import Quote5 from "./Quote5"
// import {Quote1 , Quote2 , Quote3, Quote4 , Quote5} from "./"


export default function QuotesContainer(props) {

    const [index, setIndex] = useState(1)

    const incrementIndex = () => {
        if(index === 5) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }


    const showQuotes = () => {
        switch (index) {
            case 1:
                return <Quote1 quote={props.quotes[0]} />
            case 2:
                return <Quote2 quote={props.quotes[1]} />
            case 3:
                return <Quote3 quote={props.quotes[2]} />
            case 4:
                return <Quote4 quote={props.quotes[3]} />
            case 5:
                return <Quote5 quote={props.quotes[4]} />
            default:
                console.log("No Quote Found")
            break;
        }
    }

    return (
        <div>
            {showQuotes()}
            <button onClick={() => incrementIndex()}>Cha Cha Cha Changes</button>
        </div>
    )
}
