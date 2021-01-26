<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Table',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'table',
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
