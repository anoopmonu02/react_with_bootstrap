import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

export default function Mybutton(props) {
  return (
    <div>
        <Button variant={props.btnClass}>{props.btnText}</Button>{' '}
    </div>
  )
}

Mybutton.propTypes= {
    /* use isRequired if value must be present */
    btnText: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired
  }

Mybutton.defaultProps= {
    btnText: "Enter the text",
    btnClass: "primary"
}
