import logo from './logo.svg';
import './App.css';
import { DisplayBoard } from './components/DisplayBoard';
import EnterWords from './components/EnterWords';

function App() {



  return (
    <div className="App">
      <header></header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <EnterWords
            ></EnterWords>
          </div>
          <div className="col-md-4">
            <DisplayBoard>
            </DisplayBoard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
