import React, { useRef } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const JsonInput = ({ setJson, error }) => {
  const jsonRef = useRef('')
  const handleSubmit = () => {
    const json = jsonRef.current.value
    setJson(json)
  }
  const handleClear = () => {
    jsonRef.current.value = ''
  }
  return (
    <div className="mb-3">
      <Form.Control
        as="textarea"
        placeholder="Paste JSON here"
        className="bg-secondary text-white"
        spellCheck="false"
        ref={jsonRef}
      />
      <div className="mt-3 d-flex flex-row">
        <Button className="me-3" onClick={handleSubmit}>Convert</Button>
        <Button className="me-3" onClick={handleClear}>Clear</Button>
        {error && <Alert variant="danger">Please Enter Valid JSON</Alert>}
      </div>     
    </div>
  )
}

export default JsonInput
