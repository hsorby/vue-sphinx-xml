<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'EnumeratedList',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'ol', // tag name
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
