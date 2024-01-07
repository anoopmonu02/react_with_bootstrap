import React, { useState } from 'react'
import Mynavbar from './components/Mynavbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light') //Wheather dark mode is enabled or not 
  
  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#181b2d';//212529 - Navbar dark mode color
        document.body.style.color = '#f2f2f2';
    } else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }
  
  return (
    <>
    <Mynavbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to Analyze" mode={mode}/>
    </div>
    <div className="container my-3">
      <About/>
    </div>
    </>
  );
}

export default App;
