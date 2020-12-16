<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableBody',
  mixins: [sphinxChildren],
  render(h) {
    let classes = []
    const classesValues = this.element.getAttribute('classes')
    if (classesValues) {
      classes = classesValues.split(' ')
    }
    return h(
      'tbody', 
      {
        class: classes, 
      },
      [
        h(
          'tbody',  
          { class: [''] },
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