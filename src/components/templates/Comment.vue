<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Comment',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      {
        class: 'sphinx-comment',
      },
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

<style scoped>
.sphinx-comment {
  display: none;
}
</style>
