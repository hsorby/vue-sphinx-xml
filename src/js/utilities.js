export const decodeHTML = encoded => {
  let elem = document.createElement('textarea')
  elem.innerHTML = encoded
  return elem.value
}

export const removeDeletedFunctions = functions => {
  let refIds = []
  let i = functions.length
  while (i--) {
    let currentFunction = functions[i]
    if (currentFunction.argsString.endsWith('=delete')) {
      refIds.push(currentFunction.id)
      functions.splice(i, 1)
    }
  }
  return refIds
}

export const removeFunctionsMatchingRefIds = (functionList, refIds) => {
  let i = functionList.length
  while (i-- && refIds.length) {
    let currentFunction = functionList[i]
    let j = refIds.length
    while (j--) {
      if (currentFunction.refId === refIds[j]) {
        functionList.splice(i, 1)
        refIds.splice(j, 1)
      }
    }
  }
}

export const isEmptyTextElement = node => {
  let is = true
  node.children.forEach(child => {
    if (child.nodeType !== 3) {
      is = false
    }
  })
  if (is && !!node.textContent.trim()) {
    is = false
  }
  return is
}
