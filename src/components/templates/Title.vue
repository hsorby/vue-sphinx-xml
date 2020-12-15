<script>
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Title',
  mixins: [sphinxChildren],
  render(h) {
    return h(
      this.tagName, // tag name
      { class: this.classes },
      this.children.map(child => h(child)), // array of children
    )
  },
  props: {
    element: {
      type: Element,
    },
    level: {
      type: Number,
      required: true,
    },
    isTopic: {
      type: Boolean,
    },
  },
  computed: {
    tagName() {
      let tagName = 'h' + this.level
      if (this.isTopic) {
        tagName = 'p'
      }
      return tagName
    },
    classes() {
      let classes = []
      if (this.isTopic) {
        classes.push('topic-title')
        if (this.level === 1) {
          classes.push('first')
        }
      }
      return classes
    },
  },
}
</script>

<style scoped></style>
