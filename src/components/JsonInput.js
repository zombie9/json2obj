import React, { useRef } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

const JsonInput = ({ setJson }) => {
  const jsonRef = useRef('')
  const handleSubmit = () => {
    const json = jsonRef.current.value
    setJson(json)
  }
  return (
    <div>
      <FloatingLabel controlId="floatingTextarea2" label="Paste JSON here">
        <Form.Control
          as="textarea"
          placeholder="Paste JSON here"
          style={{ height: '500px' }}
          ref={jsonRef}
        />
      </FloatingLabel>
      <Button className="float-end mt-3" onClick={handleSubmit}>Convert</Button>
    </div>
  )
}

export default JsonInput
