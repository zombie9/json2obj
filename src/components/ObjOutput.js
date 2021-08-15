import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const ObjOutput = ({ obj }) => {
  return (
    <div>
      <FloatingLabel controlId="floatingTextarea2" label="Javascript Object">
        <Form.Control
          as="textarea"
          placeholder="Javascript Object here"
          style={{ height: '500px' }}
          value={obj}
        />
      </FloatingLabel>
    </div>
  )
}

export default ObjOutput
