<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Comment',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'comment', // tag name
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
