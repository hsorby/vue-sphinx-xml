export const getPageStem = routeTo => {
  let stem = routeTo.path
  if (routeTo.params.pageName) {
    const n = routeTo.path.lastIndexOf('/')
    stem = routeTo.path.slice(0, n)
  }
  return stem
}
