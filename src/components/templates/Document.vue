<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Document',
  props: {
    element: { type: undefined, required: true },
    id: { type: String },
  },
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'div', // tag name
      {
        attrs: {
          id: this.id,
        },
      }, // options
      this.children.map(child => h(child)), // array of children
    )
  },
}
</script>
