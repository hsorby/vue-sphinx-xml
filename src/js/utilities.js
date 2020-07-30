export const decodeHTML = encoded => {
  let elem = document.createElement('textarea')
  elem.innerHTML = encoded
  return elem.value
}

export const determineRouteUrl = route => {
  const regex = route.matched[0].regex
  const matched = route.fullPath.match(regex)
  let base = matched[0]
  if (matched[matched.length - 1]) {
    base = matched[0].replace(`/${matched[matched.length - 1]}`, '')
  }
  return base
}
