import stringifyObject from "stringify-object"

export const jsonToObjConverter = (json, singleQuotes) => {
  if (!json) return
  const object = JSON.parse(json)
  const prettyObject = stringifyObject(object, {
    indent: '  ',
    singleQuotes: singleQuotes
  })
  return prettyObject
}