<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Emphasis',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'em', // tag name
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
