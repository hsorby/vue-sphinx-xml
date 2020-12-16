<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'TableEntry',
  mixins: [sphinxChildren],
  render(h) {
    let classes = []
    const classesValues = this.element.getAttribute('classes')
    if (classesValues) {
      classes = classesValues.split(' ')
    }
    return h('td', { class: classes }, [
      h(
        'td',
        { class: [''] },
        this.children.map((child) => h(child)),
      ),
    ])
  },
  props: {
    element: {
      type: Element,
    },
  },
}
</script>

<style scoped></style>