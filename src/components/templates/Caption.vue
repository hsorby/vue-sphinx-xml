<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Caption',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'figcaption', // tag name
      {},
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
