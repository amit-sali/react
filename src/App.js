import logo from './logo.svg';
import './App.css';

let name = "harry";


function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>hello {name}</h1>
      <p> paragraph  </p>
    </div>



    </>
   
  

  );
}

export default App;
