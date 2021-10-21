import stringifyObject from "stringify-object"

export const jsonToObjConverter = (json, singleQuotes, twoSpace, setJsonError) => {
  if (!json) return
  try {
    const object = JSON.parse(json)
    const prettyObject = stringifyObject(object, {
      indent: twoSpace ? '  ' : '    ',
      singleQuotes: singleQuotes
    })
    setJsonError(false)
    return prettyObject
  } catch (error) {
    setJsonError({message: 'Please enter valid JSON'})
  }
}
