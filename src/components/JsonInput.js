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
        className="font-monospace bg-secondary text-white"
        spellCheck="false"
        style={{ height: '500px', fontSize: '12px'}}
        ref={jsonRef}
      />
      <div className="mt-3 d-flex flex-row">
        <Button style={{ height: 'min-content' }} className="me-3" onClick={handleSubmit}>Convert</Button>
        <Button style={{ height: 'min-content' }} className="me-3" onClick={handleClear}>Clear</Button>
        {error && <Alert style={{padding: '0.375rem 0.75rem' }} variant="danger">Please Enter Valid JSON</Alert>}
      </div>     
    </div>
  )
}

export default JsonInput
