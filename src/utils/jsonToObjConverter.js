import stringifyObject from "stringify-object"

export const jsonToObjConverter = (json) => {
  if (!json) return
  const object = JSON.parse(json)
  const prettyObject = stringifyObject(object, {
    indent: '  ',
    singleQuotes: true
  })
  return prettyObject
}