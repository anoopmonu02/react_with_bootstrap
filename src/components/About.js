import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function About() {

    const [btnText, setBtnText] = useState('Enable Dark Mode');
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const toggleTheme =() => {
        if(myStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '0.5px solid white'
            })
            setBtnText("Enable Light Mode")
        } else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

  return (
    <div className="container">
        <h2 className="my-3">About Us</h2>
        <Accordion style={myStyle}>
            <Accordion.Item eventKey="0" style={myStyle}>
                <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
                <Accordion.Body style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={myStyle}>
                <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
                <Accordion.Body style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button className="my-2" onClick={toggleTheme} variant="dark">{btnText}</Button>{' '}
    </div>
  )
}
