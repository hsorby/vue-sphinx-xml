<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Superscript',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'sup', // tag name
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
