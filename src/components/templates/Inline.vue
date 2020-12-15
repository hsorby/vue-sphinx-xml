<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Inline',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'span', // tag name
      {
        class: this.element.getAttribute('classes').split(' '),
      },
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
