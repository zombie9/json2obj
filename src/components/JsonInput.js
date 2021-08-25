import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'

const JsonInput = ({ setJson }) => {
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
        style={{ height: '500px', fontSize: '0.8rem'}}
        ref={jsonRef}
      />
      <div className="mt-3 d-flex flex-row">
        <Button className="me-3" onClick={handleSubmit}>Convert</Button>
        <Button className="me-3" onClick={handleClear}>Clear</Button>
      </div>     
    </div>
  )
}

export default JsonInput
