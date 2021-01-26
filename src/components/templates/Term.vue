<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Term',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'dt', // tag name
      this.dataObject(),
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
