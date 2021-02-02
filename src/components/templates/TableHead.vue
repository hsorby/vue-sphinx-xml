<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableHead',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'thead',
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
