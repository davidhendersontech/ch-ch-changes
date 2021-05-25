import React, { useState } from 'react'
import Quote1 from "./Quote1"
import Quote2 from "./Quote2"
import Quote3 from "./Quote3"
import Quote4 from "./Quote4"
import Quote5 from "./Quote5"
import RickAndMorty from './RickAndMorty'
// import {Quote1 , Quote2 , Quote3, Quote4 , Quote5} from "./"


export default function QuotesContainer(props) {

    const [index, setIndex] = useState(1)

    const incrementIndex = () => {
        if(index === 6) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }


    const showQuotes = () => {
        if(props.quotes[1]){
            switch (index) {
                case 1:
                    return <Quote1 quote={props.quotes[0]} incrementIndex={incrementIndex}/>
                case 2:
                    return <Quote2 quote={props.quotes[1]} incrementIndex={incrementIndex}/>
                case 3:
                    return <Quote3 quote={props.quotes[2]} incrementIndex={incrementIndex}/>
                case 4:
                    return <Quote4 quote={props.quotes[3]} incrementIndex={incrementIndex}/>
                case 5:
                    return <Quote5 quote={props.quotes[4]} incrementIndex={incrementIndex}/>
                case 6:
                    return <RickAndMorty />
                default:
                    console.log("No Quote Found")
                break;
            }
        }
    }

    return (
        <div className="quotes-container">
            {showQuotes()}
            
        </div>
    )
}
