import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

export default function TextForm(props) {

  const [text, setText] = useState(''); 
  
  const handleUpClick = () => {
    console.log('Btn is clicked');
    setText(text.toUpperCase());
    //setText()
  }

  const handleLoClick = () => {
    //console.log('Btn is clicked');
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    console.log('changed');
    setText(event.target.value);
  }

  const handleClearClick = () => {
    let txt = '';
    setText(txt);
  }

  const handleRevClick = () => {
    let txt = text.split('').reverse().join('');
    setText(txt);
  }
    
  return (
    <>
    <div className='container'>
        <Form>            
            <h2>{props.heading}</h2>
            <Form.Group className="mb-3" controlId="myBox">                
                <Form.Control as="textarea" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} rows={8} value={text} onChange={handleOnChange}/>
            </Form.Group>
        </Form>
        {/* <Mybutton btnText="Convert to Uppercase"  btnClass="primary"/> */}
        <Button variant="primary" disabled={text.length===0} className='my-1' onClick={handleUpClick}>Convert to Uppercase</Button>{' '}
        <Button variant="success" disabled={text.length===0} className='my-1' onClick={handleLoClick}>Convert to Lowercase</Button>{' '}
        <Button variant="warning" disabled={text.length===0} className='my-1' onClick={handleClearClick}>Clear Text</Button>{' '}
        <Button variant="info" disabled={text.length===0} className='my-1' onClick={handleRevClick}>Reverse Text</Button>{' '}
    </div>

    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text.trim()===''?0:text.match(/\S+/g).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
    </div>

    </>
  )
}

TextForm.propTypes= {
    /* use isRequired if value must be present */
    heading: PropTypes.string.isRequired
  }

  TextForm.defaultProps= {
    heading: "Enter the text"
}
