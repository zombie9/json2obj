import React, { useRef, useContext, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Context } from '../utils/Context'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as CodeMirror } from 'react-codemirror2-react-17'

const JsonInput = ({ setJson, error }) => {
  const [value, setValue] = useState()
  const jsonRef = useRef('')
  const handleSubmit = () => {
    console.log(typeof(value))
    setJson(value)
  }
  const handleClear = () => {
    setValue('')
  }
  return (
    <div className="mb-3">
      <CodeMirror
        id="obj"
        ref={jsonRef}
        value={value}
        className="code-mirror-wrapper"
        onBeforeChange={(_, __, value) => {
          setValue(value)
        }}
        options={{
          lineWrapping: true,
          mode: 'javascript',
          theme: 'material-palenight',
          lineNumbers: true
        }}
      />
      <div className="mt-3 d-flex flex-row">
        <Button className="me-3" onClick={handleSubmit}>Convert</Button>
        <Button className="me-3" onClick={handleClear}>Clear</Button>
        {error && <Alert variant="danger">{error.message}</Alert>}
      </div>     
    </div>
  )
}

export default JsonInput
