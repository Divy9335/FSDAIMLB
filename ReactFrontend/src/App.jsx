import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false)
  async function getData() {
    // alert("Hello from App.jsx");
    try {
      setLoader(true)
      const response = await fetch("http://localhost:4007/data");
      const jsondata = await response.json();
      setData(jsondata.msg);
    } catch (e) {
      console.log(e)
    } finally {
      setLoader(false)
    }
  }
  function cartData(dataItem){
    alert(dataItem.title)
  }
  return (
    <>
      <div className="div">
        <h2>Hello from App.jsx</h2>
        {
          data.map((ele)=>(
            <div style={{border:'8px solid orange'}}>
              <img src={ele.image} height={200} width={200}/>
              <h2>{ele.id}:{ele.title}</h2>
              <h3>{ele.title}</h3>
              <button onClick={()=>cartData(ele)}>Add to cart</button>
            </div>
          ))
        }
        {loader?(<h2 style={{color:'red'}}>Data is loading...</h2>):("")}
        {/* {JSON.stringify(data)} */}
        <button onClick={getData}>FetchData</button>
      </div>
    </>
  );
}

export default App;