import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const ObjOutput = ({ obj, singleQuotes, setSingleQuotes, twoSpace, setTwoSpace }) => {
  const handleChangeQuotes = () => {
    setSingleQuotes(!singleQuotes)
  }
  const handleChangeIndent = () => {
    setTwoSpace(!twoSpace)
  }
  return (
    <>      
      <Form.Control
        as="textarea"
        id="obj"
        placeholder="Javascript Object here"
        className="font-monospace bg-secondary text-white"
        style={{ height: '500px', fontSize: '0.8rem'}}
        value={obj}
        readOnly
      />
      <div className="d-flex flex-row justify-content-between">
        <div className="border border-white rounded mt-3 p-3 bg-secondary small">
          <Form className="d-inline-block me-5">
            <div key="inline-radio" className="text-white">
              <Form.Check
                label="Single quotes"
                name="quotes"
                type="radio"
                id="radio-1"
                checked={singleQuotes}
                onChange={handleChangeQuotes}
              />
              <Form.Check
                label="Double quotes"
                name="quotes"
                type="radio"
                id="radio-2"
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
                id="radio-1"
                checked={twoSpace}
                onChange={handleChangeIndent}
              />
              <Form.Check
                label="4-space indent"
                name="quotes"
                type="radio"
                id="radio-2"
                checked={!twoSpace}
                onChange={handleChangeIndent}
              />
            </div>
          </Form>
        </div>
        
        <Button 
          style={{ height: 'min-content' }} 
          className="mt-3"
          onClick={() => {
            document.getElementById('obj').select();
            document.execCommand('copy');
          }}
        >Copy</Button>
      </div>     
    </>
  )
}

export default ObjOutput
