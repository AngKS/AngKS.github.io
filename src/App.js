import './App.css';


import Main from "./components/Main.jsx"
import Navbar from "./components/navbar/Navbar.jsx"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Main />
        
      </header>
    </div>
  );
}

export default App;
