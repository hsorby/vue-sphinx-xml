<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'LineBlock',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      this.dataObject(['line_block']),
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
