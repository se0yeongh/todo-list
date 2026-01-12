// App.jsx 컴포넌트 가져와서 index.html의 #root 자리에 집어넣음
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cars from './Vehicle.jsx'
import { useState, useEffect } from 'react'
const fruitlist = ['apple', 'banana', 'cherry'];

function MyList() {
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}

function Car(props){
  return(
    <h2>I am a {props.color} Car!</h2>
  );
}

function Garage() {
  return(
    <>
      <h1>Who lives in my Garage?</h1>
      <Car color = "red"/>
      <Car color = "blue"/>
    </>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  useEffect(() => {
    setCal(() => count * 2);
  }, [count]);

  return(
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
      +
      </button>
      <p>Calculation : {cal}</p>
    </>
  );
}

function Timer(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(()=> {
      setCount((count) => {count + 1});
    }, 1000);
    
    // return () => {
    //   clearTimeout(timer);
    //   console.log("타이머 중지");
    // }; 
  },[]); // count 바뀔 떄 마다 실행
  return <h1>I've rendered {count} times!</h1>;
}
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <App />
)
