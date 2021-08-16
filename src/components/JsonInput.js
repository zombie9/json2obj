import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'

const JsonInput = ({ setJson }) => {
  const jsonRef = useRef('')
  const handleSubmit = () => {
    const json = jsonRef.current.value
    setJson(json)
  }
  return (
    <div>
      <Form.Control
        as="textarea"
        placeholder="Paste JSON here"
        className="font-monospace bg-secondary text-white"
        spellCheck="false"
        style={{ height: '500px', fontSize: '0.8rem'}}
        ref={jsonRef}
      />    
      <Button className="float-end mt-3" onClick={handleSubmit}>Convert</Button>
    </div>
  )
}

export default JsonInput
