export const objToJsonConverter = (obj, twoSpace, setJsonError) => {
  if(!obj) return
  try {
    const objKeysRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;// look for object names
    const newQuotedKeysString = obj.replace(objKeysRegex, "$1\"$2\":");// all object names should be double quoted
    const newObject = JSON.parse(newQuotedKeysString);
    const indent = twoSpace ? '  ' : '    '
    return JSON.stringify(newObject, null, indent)
  } catch (error) {
    setJsonError({message: 'Please enter valid JavaScipt Object'})
  } 
}