import React from 'react'

export default function Quote5(props) {
    return (
        <div className="quote-5">   
            
            <div class="iphone">
              <div class="power"></div>
              <div class="lock"></div>
              <div class="volume up"></div>
              <div class="volume down"></div>
              <div class="camera"></div>
              <div class="speaker"></div>
              <div class="screen">
                <img src={props.quote.image_url} alt={props.quote.quote}></img>
                <h1>{props.quote.quote} </h1>
              </div>
            <div class="button" onClick={() => props.incrementIndex()}>
              <div class="square"></div>
            </div>
          </div>
        
        </div>
        
    )
}
