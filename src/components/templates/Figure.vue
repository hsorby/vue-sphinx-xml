<script>
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Figure',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'figure', // tag name
      {
        attrs: this.defineAttrs,
        class: this.classes,
      },
      this.children.map(child => h(child)),
    )
  },
  props: {
    element: {
      type: Element,
    },
  },
  computed: {
    classes() {
      let classes = []
      this.element.attributes.forEach(attr => {
        const attrName = attr.name
        if (attrName !== 'ids' && attrName !== 'names') {
          if (attrName === 'align') {
            classes.push('align-' + attr.value)
          }
        }
      })
      return classes
    },
    defineAttrs() {
      const ids = this.element.getAttribute('ids').split(' ')
      const id = ids[0]
      return {
        id,
      }
    },
  },
}
</script>

<style scoped></style>
