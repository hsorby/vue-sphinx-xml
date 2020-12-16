<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableRow',
  mixins: [sphinxChildren],
  render(h) {
    let classes = []
    const classesValues = this.element.getAttribute('classes')
    if (classesValues) {
      classes = classesValues.split(' ')
    }
    return h(
      'tr', 
      {
        class: classes, 
      },
      [
        h(
          'tr',  
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