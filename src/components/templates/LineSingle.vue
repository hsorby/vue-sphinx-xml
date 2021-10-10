<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'LineSingle',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      this.dataObject(['line_single']),
      this.children.map(child => h(child)), // array of children
    )
  },
}
</script>
