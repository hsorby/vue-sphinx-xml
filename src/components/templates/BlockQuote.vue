<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'BlockQuote',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'blockquote', // tag name
      {}, // options
      [
        h(
          'div',
          {},
          this.children.map(child => h(child)),
        ),
      ], // array of children
    )
  },

  props: {
    element: {
      type: Element,
    },
  },
}
</script>
