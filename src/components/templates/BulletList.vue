<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'BulletList',
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'ul', // tag name
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
