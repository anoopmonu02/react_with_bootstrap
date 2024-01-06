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
  const handleOnChange = (event) => {
    console.log('changed');
    setText(event.target.value);
  }
    
  return (
    <div>
        <Form>            
            <h2>{props.heading}</h2>
            <Form.Group className="mb-3" controlId="myBox">                
                <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChange}/>
            </Form.Group>
        </Form>
        {/* <Mybutton btnText="Convert to Uppercase"  btnClass="primary"/> */}
        <Button variant="primary" onClick={handleUpClick}>Convert to Uppercase</Button>{' '}
    </div>
  )
}

TextForm.propTypes= {
    /* use isRequired if value must be present */
    heading: PropTypes.string.isRequired
  }

  TextForm.defaultProps= {
    heading: "Enter the text"
}
