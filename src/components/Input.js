import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as CodeMirror } from 'react-codemirror2-react-17'

const Input = ({ setInput, error, setError }) => {
  const [value, setValue] = useState()

  const handleClear = () => {
    setValue('')
    setError(false)
  }
  return (
    <div className="mb-3">
      <CodeMirror
        id="obj"
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
        <Button className="me-3" onClick={() => setInput(value)}>Convert</Button>
        <Button className="me-3" onClick={handleClear}>Clear</Button>
        {error && <Alert variant="danger">{error.message}</Alert>}
      </div>     
    </div>
  )
}

export default Input
