<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Footnote',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      this.dataObject(['footnote']),
      this.children.map(child => h(child)), // array of children
    )
  },
}
</script>
