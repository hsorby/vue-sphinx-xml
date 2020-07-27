<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Strong',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'strong', // tag name
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
