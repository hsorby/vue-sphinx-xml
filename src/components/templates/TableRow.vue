<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableRow',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'tr',
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
