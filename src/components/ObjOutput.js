import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ObjOutput = ({ obj, singleQuotes, setSingleQuotes }) => {
  const handleClick = () => {
    setSingleQuotes(!singleQuotes)
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
        <Form>
          <div key="inline-radio" className="text-white mt-2">
            <Form.Check
              label="Single Quotes"
              name="quotes"
              type="radio"
              id="radio-1"
              checked={singleQuotes}
              onChange={handleClick}
            />
            <Form.Check
              label="Double Quotes"
              name="quotes"
              type="radio"
              id="radio-2"
              checked={!singleQuotes}
              onChange={handleClick}
            />
          </div>
        </Form>
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
