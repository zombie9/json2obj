import stringifyObject from "stringify-object"

export const jsonToObjConverter = (json, singleQuotes, twoSpace) => {
  if (!json) return
  const object = JSON.parse(json)
  const prettyObject = stringifyObject(object, {
    indent: twoSpace ? '  ' : '    ',
    singleQuotes: singleQuotes
  })
  return prettyObject
}