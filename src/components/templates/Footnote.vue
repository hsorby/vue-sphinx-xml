<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Footnote',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      {
        attrs: this.defineAttrs,
        class: this.getClassList,
      },
      this.children.map(child => h(child)), // array of children
    )
  },
  props: {
    element: {
      type: Element,
    },
  },
  computed: {
    getClassList() {
      return ['footnote', ...this.element.classList]
    },
    defineAttrs() {
      // Inserting the id of the first term in a collection as the contents of the item.
      if (this.element.getAttribute('ids') && this.element.getAttribute('ids').length > 0) {
        const ids = this.element.getAttribute('ids').split(' ')
        const id = ids[0]
        return {
          id,
        }
      }
      return {}
    },
  },
}
</script>

<style scoped></style>
