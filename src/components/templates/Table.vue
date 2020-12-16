<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Table',
  mixins: [sphinxChildren],
  render(h) {
    let classes = []
    const classesValues = this.element.getAttribute('classes')
    if (classesValues) {
      classes = classesValues.split(' ')
    }
    return h(
      'table', 
      {
        class: classes, 
      },
      [
        h(
          'table',  
          { class: classes },
          this.children.map(child => h(child)),
        ),
      ], 
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