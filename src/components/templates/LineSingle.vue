<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'LineSingle',
  mixins: [sphinxChildren],
  render(h) {
    let classes = []
    const classesValues = this.element.getAttribute('classes')
    if (classesValues) {
      classes = classesValues.split(' ')
    }
    return h(
      'div', // tag name
      {
        class: classes,
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

<style scoped></style>
