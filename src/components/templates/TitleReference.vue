<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TitleReference',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'cite', // tag name
      {},
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
