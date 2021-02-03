<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Label',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'span', // tag name
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
