import logo from './logo.svg';
import React from 'react';
import './App.css';
import { DisplayBoard } from './components/DisplayBoard';
import EnterWords from './components/EnterWords';
import CountWords from './services/CountWords';
import { Component, useState } from 'react';

function App() {

  const [text, setText] = useState("");
  let [wordCount, setWordCount] = useState(0);

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
        //return await response.json;
        let resJson = await response.json();
        if(response.status === 200){
          setText("");
          setWordCount(resJson.count);
          DisplayBoard(wordCount);
        } else{
          console.log("some wacko stuff happened");
        }
    }
    catch(error){
        return "Error";
    }
  }

  return (
    <div className="App">
      <header></header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={countWords}>
              <input type="text" value={text} placeholder="Text" onChange={(e) => setText(e.target.value)}></input>
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
      </div>
    </div>
  );
}

export default App;
