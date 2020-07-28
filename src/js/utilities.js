export const decodeHTML = encoded => {
  let elem = document.createElement('textarea')
  elem.innerHTML = encoded
  return elem.value
}

export const determineRouteUrl = route => {
  const regex = route.matched[0].regex
  const matched = route.fullPath.match(regex)
  let base = matched[0]
  if (matched[1]) {
    base = matched[0].replace(`/${matched[1]}`, '')
  }
  return base
}
