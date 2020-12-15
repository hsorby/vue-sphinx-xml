<script>
import { mapGetters } from 'vuex'

import { sphinxChildren } from '../../mixins/SphinxChildren'
import { determineRouteUrl } from '../../js/utilities'

export default {
  name: 'SphinxImage',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'img', // tag name
      {
        attrs: this.defineAttrs,
      },
      this.children.map(child => h(child)), // array of children
    )
  },
  props: {
    element: {
      type: Element,
    },
  },
  computed: {
    defineAttrs() {
      return {
        alt: this.element.getAttribute('alt'),
        src: this.uri(),
      }
    },
    ...mapGetters({
      getImagesURL: 'sphinx/getImagesURL',
    }),
  },
  methods: {
    uri() {
      let imageURI = this.element.getAttribute('uri')
      if (
        imageURI &&
        !imageURI.startsWith('/') &&
        !imageURI.startsWith('http')
      ) {
        const routeURL = determineRouteUrl(this.$route)
        // Sphinx puts all images in a directory '_images' by default
        // for HTML output.  We are saying here that we will map the
        // XML image reference the same way.
        const lastIndex = imageURI.lastIndexOf('/')
        const imageName = imageURI.slice(lastIndex)
        imageURI = `${this.getImagesURL(routeURL)}${imageName}`
      }

      return imageURI
    },
  },
}
</script>

<style scoped></style>
