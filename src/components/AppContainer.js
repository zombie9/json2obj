import React, { useState, useEffect } from 'react'
import AppHeader from './AppHeader'
import { Container } from 'react-bootstrap'
import JsonInput from './JsonInput'
import ObjOutput from './ObjOutput'
import { jsonToObjConverter } from '../utils/jsonToObjConverter'

const AppContainer = () => {
  const [json, setJson] = useState('')
  const [jsonError, setJsonError] = useState(false)
  const [obj, setObj] = useState(json)
  const [singleQuotes, setSingleQuotes] = useState(true)
  const [twoSpace, setTwoSpace] = useState(true)
  
  useEffect(() => {
    const object = jsonToObjConverter(json, singleQuotes, twoSpace, setJsonError)
    !!object && setObj(object)
  }, [json, singleQuotes, twoSpace])
  
  return (
    <Container>
      <AppHeader />
      <div className="row">
        <div className="col-md-6">
          <JsonInput error={jsonError} setJson={setJson}/>
        </div>
        <div className="col-md-6">
          <ObjOutput 
            obj={obj}
            singleQuotes={singleQuotes}
            setSingleQuotes={setSingleQuotes}
            twoSpace={twoSpace}
            setTwoSpace={setTwoSpace}
          />
        </div>
      </div>
    </Container>
  )
}

export default AppContainer
