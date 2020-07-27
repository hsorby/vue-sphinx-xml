<template>
  <document :element="element" :id="id" keepalive />
</template>

<script>
import store from '@/store'

const fetchPage = name => {
  const getPageById = store.getters['sphinx/getPageById']
  const existingPageWrapper = getPageById(name)
  const alt = store.state.sphinx.pages.find(page => page.id === name)
  console.log('existing vs. alt:', existingPageWrapper, alt)
  if (existingPageWrapper) {
    return new Promise(resolve => {
      resolve(existingPageWrapper.page)
    })
  } else {
    return store.dispatch('sphinx/fetchPage', name)
  }
}

export default {
  name: 'SphinxPage',
  components: {
    document: () => import('@/components/templates/Document'),
  },
  props: {
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
      fetchPage(pageName).then(element => {
        this.element = element
        this.id = pageName.replace('/', '_')
      })
    },
  },
}
</script>

<style scoped></style>
