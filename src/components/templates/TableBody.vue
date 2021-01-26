<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableBody',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'tbody',
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
