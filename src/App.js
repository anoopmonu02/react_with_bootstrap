import React from 'react'
import Mynavbar from './components/Mynavbar';
import TextForm from './components/TextForm';


function App() {

  return (
    <>
    <Mynavbar title="TextUtils" aboutText="About Textutils"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to Analyze"/>
    </div>
    
    </>
  );
}

export default App;
