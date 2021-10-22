import stringifyObject from 'stringify-object';
import { errorMessage } from './constants';

export const jsonToObjConverter = (json, singleQuotes, twoSpace, setJsonError) => {
  if (!json || json === '') return;
  try {
    const object = JSON.parse(json);
    const prettyObject = stringifyObject(object, {
      indent: twoSpace ? '  ' : '    ',
      singleQuotes: singleQuotes
    });
    setJsonError(false);
    return prettyObject;
  } catch (error) {
    setJsonError({ message: errorMessage.JSON });
  }
};
