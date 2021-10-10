<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Comment',
  mixins: [sphinxChildren],
  render(h) {
    let comment = h('', {})
    let text = ''
    this.element.childNodes.forEach(node => {
      text += node.nodeValue
    })
    comment.text = text
    return comment
  },
}
</script>
