<template>
  <router-link v-if="isInternalReference" :to="routeDescription">
    {{ element.textContent }}</router-link
  >
  <a v-else :href="element.getAttribute('refuri')">{{ element.textContent }}</a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Reference',
  props: {
    element: {
      type: Element,
      required: true,
    },
  },
  data() {
    return {
      routeDescription: {
        path: '',
        hash: '',
        // params: {},
      },
    }
  },
  created() {
    if (this.isInternalReference()) {
      let pageName = this.$route.params.pageName
      const baseRefUri = this.determineBaseRefUri()
      this.routeDescription.hash = this.element.getAttribute('refid')
      if (!this.isReferenceToCurrentPage()) {
        pageName = this.determinePageName()
        this.routeDescription.hash = this.determinePageLocation()
        const existingPageWrapper = this.getPageById(pageName)
        if (!existingPageWrapper) {
          this.$store.dispatch('sphinx/fetchPage', pageName)
        }
      }
      this.routeDescription.path = baseRefUri + '/' + pageName
    }
  },
  methods: {
    determinePageLocation() {
      const elementRefUri = this.element.getAttribute('refuri')
      const hash = elementRefUri.split('#')[1]
      return hash ? '#' + hash : ''
    },
    determineBaseRefUri() {
      const regex = this.$route.matched[0].regex
      const matched = this.$route.fullPath.match(regex)
      let base = matched[0]
      if (matched[1]) {
        base = matched[0].replace(`/${matched[1]}`, '')
      }
      return base
    },
    determinePageName() {
      const baseRefUri = this.determineBaseRefUri()
      const elementRefUri = this.element.getAttribute('refuri')

      // Remove page from reference uri
      let splitRefUri = elementRefUri.split('/')
      let routePath = this.$route.path.replace(baseRefUri, '')
      // Remove the baseRefUri and make that our root location
      let splitRoutePath = routePath.split('/')
      // Remove the empty string from the beginning of the array
      splitRoutePath.shift()
      if (this.$route.path !== baseRefUri) {
        // The base reference uri is a special case usually we have to
        // remove the page name from the route as well.
        splitRoutePath.pop()
      }
      // Get the file name from the reference uri
      const filePart = splitRefUri.pop()
      const fileBaseName = filePart.split('#')[0]
      // Remove up route if parent directory name found
      while (splitRefUri[0] === '..') {
        splitRefUri.shift()
        splitRoutePath.pop()
      }
      return [...splitRoutePath, ...splitRefUri, fileBaseName].join('/')
    },
    isInternalReference() {
      const internal = this.element.getAttribute('internal') === 'True'
      return internal || this.isReferenceToCurrentPage()
    },
    isReferenceToCurrentPage() {
      return this.element.hasAttribute('refid')
    },
  },
  computed: {
    ...mapGetters({
      getPageById: 'sphinx/getPageById',
    }),
  },
}
</script>

<style scoped></style>
