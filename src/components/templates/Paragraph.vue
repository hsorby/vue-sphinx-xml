<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Paragraph',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'p', // tag name
      {}, // options
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
