import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import { Container } from 'react-bootstrap';
import Input from './Input';
import Output from './Output';
import { jsonToObjConverter } from '../utils/jsonToObjConverter';
import { objToJsonConverter } from '../utils/objToJsonConverter';

const AppContainer = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(input);
  const [error, setError] = useState(false);
  const [singleQuotes, setSingleQuotes] = useState(true);
  const [twoSpace, setTwoSpace] = useState(true);
  const [isJsonToObj, setIsJsonToObj] = useState(true);

  useEffect(() => {
    const converted = isJsonToObj
      ? jsonToObjConverter(input, singleQuotes, twoSpace, setError)
      : objToJsonConverter(input, twoSpace, setError);
    !!converted && setOutput(converted);
  }, [isJsonToObj, input, singleQuotes, twoSpace]);

  return (
    <Container>
      <AppHeader isJsonToObj={isJsonToObj} setIsJsonToObj={setIsJsonToObj} setError={setError} />
      <div className="row">
        <div className="col-md-6">
          <Input error={error} setError={setError} setInput={setInput} />
        </div>
        <div className="col-md-6">
          <Output
            output={output}
            singleQuotes={singleQuotes}
            setSingleQuotes={setSingleQuotes}
            twoSpace={twoSpace}
            setTwoSpace={setTwoSpace}
            isJsonToObj={isJsonToObj}
          />
        </div>
      </div>
    </Container>
  );
};

export default AppContainer;
