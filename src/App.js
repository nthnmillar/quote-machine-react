import React from 'react';
 import 'bootstrap'; 
/* import logo from './logo.svg'; */
import './App.css';

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      error:null,
      isLoaded:false,
      character:[]
    };   
    this.contentFetch = this.contentFetch.bind(this);
  }
 
   contentFetch(){
    console.log("component mounted");
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
  .then(response => response.json())
  .then((data) => { 
           this.setState({
            isLoaded:true,
            character:data[0]     
            });
      });
  } 
  
  componentDidMount(){
    this.contentFetch();
  }
  
  render(){
    console.log ('rendered');
    const {isLoaded,image, quote, character } = this.state; 
    console.log ('character',character, 'quote', quote)

    if (!isLoaded){
      return (
        <div id="quote-box">
          <h1 className="text-center">Loading...</h1>
        </div>
        );
      } else if  (isLoaded){
        return (
          <div id="quote-box">
            <img className="text-center" src={character.image}/>
            <h1 className="text-center" id="text">{character.quote}</h1>
            <h2 className="text-center" id="author">{"- " + character.character}</h2>
            <div className="row">
              <button className="btnSimp" id="newBtn" onClick={this.contentFetch} id="new-quote">New Quote</button>
              <button className="btnSimp" id="tweetBtn"><a id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text="+character.quote + " - " + character.character}><i id="bird-ico" className="fab fa-3x fa-twitter"/> Tweet</a></button>            
            </div>  
          </div>    
        )
      } 
   }
}


/*
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/

export default App;
