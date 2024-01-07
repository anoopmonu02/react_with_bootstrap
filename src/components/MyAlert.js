import React from 'react'
import Alert from 'react-bootstrap/Alert';

function MyAlert(props) {

  const convertToTitle = (type) =>{
    let lower = type.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    
  return (
    /* dismissible */
    props.alert && <Alert variant={props.alert.typ} >
    <Alert.Heading>{convertToTitle(props.alert.typ)}</Alert.Heading>
        {/* <p>
            {props.alert.msg}
        </p> */}
        {props.alert.msg}
    </Alert>
  )
}

export default MyAlert