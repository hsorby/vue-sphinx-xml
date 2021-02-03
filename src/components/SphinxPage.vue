<template>
  <document :element="element" :id="id" keepalive />
</template>

<script>
import store from '../store'

import { determineRouteUrl } from '../js/utilities'

export default {
  name: 'SphinxPage',
  components: {
    document: () => import('./templates/Document'),
  },
  props: {
    baseURL: {
      type: String,
      default: '/',
    },
    downloadBaseURL: {
      type: String,
      default: '',
    },
    imagesBaseURL: {
      type: String,
      default: '',
    },
    indexFileName: {
      type: String,
      default: 'index',
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
              if (elem) {
                window.scrollTo({
                  top: elem.offsetTop,
                  behavior: 'smooth',
                })
              }
            }, this.scrollDelay)
          }
        } else if (to.path === from.path && to.hash) {
          const elem = document.querySelector(to.hash)
          if (elem) {
            window.scrollTo({
              top: elem.offsetTop,
              behavior: 'smooth',
            })
          }
        }
      },
      immediate: true,
    },
  },
  updated() {
    this.$emit('updated')
  },
  methods: {
    fetchPageData(routeTo) {
      let pageName = routeTo.params.pageName
      if (!pageName) {
        pageName = this.indexFileName
      }
      const imagesBaseURL =
        this.imagesBaseURL === ''
          ? `${this.baseURL}/_images`
          : this.imagesBaseURL
      const downloadBaseURL =
        this.downloadBaseURL === ''
          ? `${this.baseURL}/_downloads`
          : this.downloadBaseURL
      const routeURL = determineRouteUrl(routeTo)
      store
        .dispatch('sphinx/fetchPage', {
          page_name: pageName,
          page_route: routeURL,
          page_url: this.baseURL,
          page_downloads: downloadBaseURL,
          page_images: imagesBaseURL,
        })
        .then(element => {
          if (element) {
            this.element = element
            this.id = pageName.replace('/', '_')
          } else {
            this.$router.push({
              name: '404',
              params: {
                type: 'page',
                message: `Could not find Sphinx page '${pageName}.xml'.`,
              },
            })
          }
        })
    },
  },
}
</script>
