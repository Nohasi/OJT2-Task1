import logo from './logo.svg';
import React from 'react';
import './App.css';
import { DisplayBoard } from './components/DisplayBoard';
import { Component, useState } from 'react';

function App() {
  // Setting states
  let [text, setText] = useState("");
  let [wordCount, setWordCount] = useState(0);
  let [errorMessage, setErrorMessage] = useState("");

  // Function that will connect to the API server
  let countWords = async (data) => {
    data.preventDefault();
    try {
        console.log(text);
        const response = await fetch('', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              text: text,
            })
        });
        // waits for API server to return a response;
        let resJson = await response.json();
        if(response.status === 200){
          // Reseting text box for use again, and updating word count display
          //setText("");
          setErrorMessage("");
          setWordCount(resJson.count);
          DisplayBoard(wordCount);
        } else{
          console.log("error: Parameter text is missing");
          setWordCount(0);
          setErrorMessage("Error: Parameter text is missing");
        }
    }
    catch(error){
        return "error: could not connect to API server";
    }
  }

  return (
    <div className="App">
      <header></header>
      <div className="container mrgnbtm">
        <div className="row">
          <h1>Word Counter</h1>
        </div>
        <div className="row">
          <div style={{paddingBottom: '15px'}} className="col-md-4">
            <form onSubmit={countWords}>
              <input type="text" value={text} placeholder="Enter your text here!" onChange={(e) => setText(e.target.value)}></input>
              &nbsp;&nbsp;&nbsp;
              <button type="submit">Count</button>
            </form>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              countWords = {wordCount}
            >
            </DisplayBoard>
          </div>
        </div>
        <div className="row">
          <div className="blink">
            <h2>
              {errorMessage}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
