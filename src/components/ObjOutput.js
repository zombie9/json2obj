import React, { useRef, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as CodeMirror } from 'react-codemirror2-react-17'

const ObjOutput = ({ obj, singleQuotes, setSingleQuotes, twoSpace, setTwoSpace }) => {
  const [editor, setEditor] = useState()
  const [copied, setCopied] = useState(false)
  const codeMirrorRef = useRef()
  const handleChangeQuotes = () => {
    setSingleQuotes(!singleQuotes)
  }
  const handleChangeIndent = () => {
    setTwoSpace(!twoSpace)
  }
  useEffect(() => {
    setCopied(false)
  }, [obj, singleQuotes, twoSpace])

  return (
    <>      
      <CodeMirror
        id="obj"
        ref={codeMirrorRef}
        value={obj}
        className="code-mirror-wrapper"
        editorDidMount={editor => setEditor(editor)}
        options={{
          lineWrapping: true,
          mode: 'javascript',
          theme: 'material-palenight',
          lineNumbers: true
        }}
      />
      
      <div className="d-flex flex-row justify-content-between">
        <div className="border border-white rounded mt-3 me-3 px-3 py-2 bg-secondary small">
          <Form className="d-inline-block me-5">
            <div key="inline-radio" className="text-white">
              <Form.Check
                label="Single quotes"
                name="quotes"
                type="radio"
                checked={singleQuotes}
                onChange={handleChangeQuotes}
              />
              <Form.Check
                label="Double quotes"
                name="quotes"
                type="radio"
                checked={!singleQuotes}
                onChange={handleChangeQuotes}
              />
            </div>
          </Form>
          <Form className="d-inline-block">
            <div key="inline-radio" className="text-white">
              <Form.Check
                label="2-Space indent"
                name="quotes"
                type="radio"
                checked={twoSpace}
                onChange={handleChangeIndent}
              />
              <Form.Check
                label="4-space indent"
                name="quotes"
                type="radio"
                checked={!twoSpace}
                onChange={handleChangeIndent}
              />
            </div>
          </Form>
        </div>
        
        <Button
          className="mt-3"
          disabled={copied}
          onClick={() => {
            editor.execCommand('selectAll')
            console.log(editor.doc.size)
            navigator.clipboard.writeText(obj)
            setCopied(true)
          }}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>     
    </>
  )
}

export default ObjOutput
