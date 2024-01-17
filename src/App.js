import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import TextForm from './components/TextForm';
import About from './components/About';
import MyAlert from './components/MyAlert';
//import { SketchPicker } from 'react-color';




function App() {
  const [mode, setMode] = useState('light') //Wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    //Can use setInterval for continuous loop at the given time
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {    
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#181b2d';//212529 - Navbar dark mode color
        document.body.style.color = '#f2f2f2';
        showAlert("Dark mode enabled", "warning")
    } else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "success")
    }
  }

  /* const [color, setColor] = useState('#ffffff'); // Initial color (white)

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    document.body.style.backgroundColor = newColor.hex;
  }; */
  
  return (
    <>
    
    <Mynavbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <MyAlert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About/>}/> 
        <Route exact path="" element={<TextForm heading="Enter the text to Analyze" mode={mode}/>}/>
    </Routes>
      
      
    </div>
    {/* <div className="container my-3">
      <About/>
    </div> */}
    {/* <div>
      <SketchPicker color={color} onChange={handleColorChange} />
    </div> */}
    </>
  );
}

export default App;
