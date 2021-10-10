<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'FigureCaption',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'div', // tag name
      this.dataObject(this.classes),
      this.children.map(child => h(child)),
    )
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
      classes.push('figure-caption')
      return classes
    },
  },
}
</script>
