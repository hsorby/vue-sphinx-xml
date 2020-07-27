<script>
import { mapGetters } from 'vuex'

import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'DownloadReference',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'a', // tag name
      {
        attrs: this.defineAttrs,
        class: this.classes,
      },
      this.children.map(child => h(child)),
    )
  },
  props: {
    element: {
      type: Element,
    },
  },
  computed: {
    classes() {
      let classes = ['reference', 'internal']
      this.element.getAttribute('reftype') === 'download'
        ? classes.push('download')
        : null
      return classes
    },
    href() {
      let downloadHref = this.element.getAttribute('filename')
      if (
        downloadHref &&
        !downloadHref.startsWith('/') &&
        !downloadHref.startsWith('http')
      ) {
        downloadHref = `${this.getDownloadLocation()}/${downloadHref}`
      }
      return downloadHref
    },
    defineAttrs() {
      const targetParts = this.element.getAttribute('reftarget').split('/')
      const downloadName = targetParts[targetParts.length - 1]
      return {
        download: downloadName,
        href: this.href,
      }
    },
    ...mapGetters({
      getDownloadLocation: 'sphinx/getDownloadLocation',
    }),
  },
}
</script>

<style scoped></style>
