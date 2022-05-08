import { createContext, useState } from 'react';
import './App.css';
import Blog from './Components/Blog';
// import ColorBox from './Components/ColorBox';
import colorContext from './Context/colorContext';


const App = () => {

  const [currTheme, setCurrTheme] = useState("white");
  let textColor = ((currTheme === "blue") || (currTheme === "black")) ? "dark" : "light";

  return (
    <div className={`App theme-${currTheme}`}>
     
      {/* Heading */}
      <h1><a href="https://vedabase.io/en/library/ssr/1/" className={textColor}>🔗 Learning the science of soul.</a></h1>
     
      {/* Color options */}
      <div className='color-container'>
        <div
          className={`color-box color-white`}
          onClick={() => { setCurrTheme("white") }}
        >
        </div>
        <div
          className={`color-box color-black`}
          onClick={() => { setCurrTheme("black") }}
        >
        </div>
        <div
          className={`color-box color-green`}
          onClick={() => { setCurrTheme("green") }}
        >
        </div>
        <div
          className={`color-box color-blue`}
          onClick={() => { setCurrTheme("blue") }}
        >
        </div>

      </div>

      {/* Main content */}
      <colorContext.Provider value={{ currTheme }}>
        <Blog />
      </colorContext.Provider>
    </div>
  );
}

export default App;
