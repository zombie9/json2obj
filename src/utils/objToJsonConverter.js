import { errorMessage } from './constants';

export const objToJsonConverter = (obj, twoSpace, setJsonError) => {
  if (!obj) return;
  try {
    const doubleQuoteString = obj.replace(/'/g, '"');
    const objKeysRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$.][A-Za-z0-9_ \-.$]*)(?:')?(?:\s*):/g;
    const newQuotedKeysString = doubleQuoteString.replace(objKeysRegex, '$1"$2":');
    const newObject = JSON.parse(newQuotedKeysString);
    const indent = twoSpace ? '  ' : '    ';
    return JSON.stringify(newObject, null, indent);
  } catch (error) {
    setJsonError({ message: errorMessage.OBJECT });
  }
};
