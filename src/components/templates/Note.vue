<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Note',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      this.dataObject(this.classes),
      [
        h('p', { class: 'admonition-title' }, 'Note'),
        ...this.children.map(child => h(child)),
      ], // array of children
    )
  },
  computed: {
    classes() {
      return ['admonition', 'note']
    },
  },
}
</script>
