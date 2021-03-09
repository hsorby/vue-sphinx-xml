<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Figure',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'figure', // tag name
      this.dataObject(this.classes),
      this.children.map((child) => h(child, {attrs: this.attrs}),
      ),
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
    attrs() {
      const unrequiredAttrs = ['uri', 'ids', 'names', 'candidates']
      let attrDict = {}
      this.element.attributes.forEach((attr) => {
        if (!unrequiredAttrs.includes(attr.name)) {
          attrDict[attr.name] = attr.value
        }
      })
      return attrDict
    },
  },
}
</script>
