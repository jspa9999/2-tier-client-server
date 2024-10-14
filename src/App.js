import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  let [cricketers, setCricketers] = useState([]);
  
  let getCricketersFromServer =async()=>{

    let reqOptions = {
     method:"GET"

     }
     
     let JSONData = await fetch("http://localhost:6767/cricketers",reqOptions);

     let JSOData = await JSONData.json();
     setCricketers(JSOData);
     console.log(JSOData);
    }
   
  return (
    <div className="App">
      <button onClick={()=>{
        getCricketersFromServer();
      }}>Cricketers</button>

      {cricketers.map((ele,i)=>{
        return <h2 key={i}>{ele}</h2>
      })}
    </div>
  );
}

export default App;
