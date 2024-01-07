import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here'); 
  
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
    
  return (
    <>
    <div className='container'>
        <Form>            
            <h2>{props.heading}</h2>
            <Form.Group className="mb-3" controlId="myBox">                
                <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChange}/>
            </Form.Group>
        </Form>
        {/* <Mybutton btnText="Convert to Uppercase"  btnClass="primary"/> */}
        <Button variant="primary" onClick={handleUpClick}>Convert to Uppercase</Button>{' '}
        <Button variant="success" onClick={handleLoClick}>Convert to Lowercase</Button>{' '}
    </div>

    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
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
