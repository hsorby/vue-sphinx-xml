<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Rubric',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'h3', // tag name
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
