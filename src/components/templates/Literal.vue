<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Literal',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      'code', // tag name
      this.dataObject(),
      [
        h(
          'span',
          { class: ['pre'] },
          this.children.map(child => h(child)),
        ),
      ], // array of children
    )
  },
}
</script>
