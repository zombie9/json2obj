import React, { useState, useEffect } from 'react'
import AppHeader from './AppHeader'
import { Container } from 'react-bootstrap'
import JsonInput from './JsonInput'
import ObjOutput from './ObjOutput'
import { jsonToObjConverter } from '../utils/jsonToObjConverter'

const AppContainer = () => {
  const [json, setJson] = useState('')
  const [obj, setObj] = useState(json)
  const [singleQuotes, setSingleQuotes] = useState(true)
  
  useEffect(() => {
    const object = jsonToObjConverter(json, singleQuotes)
    setObj(object)
  }, [json, singleQuotes])
  
  return (
    <Container>
      <AppHeader />
      <div className="row">
        <div className="col-md-6">
          <JsonInput setJson={setJson}/>
        </div>
        <div className="col-md-6">
          <ObjOutput 
            obj={obj}
            singleQuotes={singleQuotes}
            setSingleQuotes={setSingleQuotes}
          />
        </div>
      </div>
    </Container>
  )
}

export default AppContainer
