<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableEntry',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'td',
      this.dataObject(),
      this.children.map(child => h(child)),
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
