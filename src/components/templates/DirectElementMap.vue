<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'DirectElementMap',
  mixins: [sphinxChildren],
  render(h) {
    const tagName = this.tagName
    return h(
      tagName,
      this.dataObject(),
      this.children.map(child => h(child)),
    )
  },
  props: {
    tagName: {
      type: String,
    },
  },
}
</script>
