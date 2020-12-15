<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'ListItem',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'li', // tag name
      {}, // options
      this.children.map(child => h(child)), // array of children
    )
  },
  props: {
    element: {
      type: Element,
      required: true,
    },
  },
}
</script>

<style scoped></style>
