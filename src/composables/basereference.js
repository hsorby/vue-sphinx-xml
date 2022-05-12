import { useStore } from 'vuex'

import { useMethods } from './methods'
import { determineRouteUrl, constructPageNameFromRoute } from '../js/utilities'

const {
  determinePageLocation,
  determinePageName,
  isInternalReference,
  isReferenceToCurrentPage,
} = useMethods()

export const useBaseReference = (element, route, routeDescription) => {
  const store = useStore()

  const onReferenceCreated = () => {
    if (isInternalReference(element)) {
      let pageName = constructPageNameFromRoute(route)
      const baseRefUri = determineRouteUrl(route)
      const pageReference = element.getAttribute('refid')
      if (pageReference && !pageReference.startsWith('#')) {
        routeDescription.value.hash = '#' + pageReference
      } else {
        routeDescription.value.hash = pageReference
      }
      if (!isReferenceToCurrentPage(element)) {
        pageName = determinePageName(element, route)
        routeDescription.value.hash = determinePageLocation(element)
        const existingPageWrapper = store.getters['sphinx/getPageById'](
          baseRefUri,
          pageName,
        )
        if (!existingPageWrapper) {
          store.dispatch('sphinx/fetchPage', {
            page_name: pageName,
            page_route: baseRefUri,
            page_url: store.getters['sphinx/getBaseUrl'](baseRefUri),
          })
        }
      }

      routeDescription.value.path = baseRefUri + '/' + pageName
    }
  }
  return {
    onReferenceCreated,
  }
}
