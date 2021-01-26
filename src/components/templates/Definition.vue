<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Definition',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'dd', // tag name
      this.dataObject(['definition']),
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
