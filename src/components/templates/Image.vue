<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'SphinxImage',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'img', // tag name
      {
        attrs: {
          alt: this.element.getAttribute('alt'),
          src: this.element.getAttribute('src'),
        },
      },
      this.children.map(child => h(child)), // array of children
    )
  },
  props: {
    element: {
      type: Element,
    },
  },
}
</script>

<style scoped></style>
