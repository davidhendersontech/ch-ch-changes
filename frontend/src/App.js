import { Component } from 'react';
import './App.css';
import QuotesCointainer from "./Components/QuotesContainer"

class App extends Component {

  state = {
    quotes: [],
  }


  
  componentDidMount() {
    fetch("http://localhost:3000/quotes")
      .then(res => res.json())
      .then(quotes => {
        this.setState({ quotes })
      })
    }

  render() {
    return (
      <div className="App">
        <QuotesCointainer quotes={this.state.quotes} />
      </div>
    );
  }
}


export default App;
