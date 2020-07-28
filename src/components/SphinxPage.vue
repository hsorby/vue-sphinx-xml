<template>
  <document :element="element" :id="id" keepalive />
</template>

<script>
import store from '@/store'

import { determineRouteUrl } from '@/js/utilities'

export default {
  name: 'SphinxPage',
  components: {
    document: () => import('@/components/templates/Document'),
  },
  props: {
    baseURL: {
      type: String,
      default: '/',
    },
    indexFileName: {
      type: String,
      default: 'index',
    },
    downloadLocation: {
      type: String,
      default: '/downloads',
    },
    scrollDelay: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      element: document.createElement(null),
      id: '',
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        if (from === undefined || to.path !== from.path) {
          this.page = {}
          this.fetchPageData(to)
          if (to.hash) {
            setTimeout(() => {
              const elem = document.querySelector(to.hash)
              window.scrollTo({
                top: elem.offsetTop,
                behavior: 'smooth',
              })
            }, this.scrollDelay)
          }
        } else if (to.path === from.path && to.hash) {
          const elem = document.querySelector(to.hash)
          window.scrollTo({
            top: elem.offsetTop,
            behavior: 'smooth',
          })
        }
      },
      immediate: true,
    },
  },
  methods: {
    fetchPageData(routeTo) {
      let pageName = routeTo.params.pageName
      if (!pageName) {
        pageName = this.indexFileName
      }
      const routeURL = determineRouteUrl(routeTo)
      store
        .dispatch('sphinx/fetchPage', {
          page_name: pageName,
          page_route: routeURL,
          page_url: this.baseURL,
          page_download: this.downloadLocation,
        })
        .then(element => {
          this.element = element
          this.id = pageName.replace('/', '_')
        })
    },
  },
}
</script>

<style scoped></style>
