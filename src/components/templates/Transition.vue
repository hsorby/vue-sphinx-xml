<script>
import { h } from 'vue'

export default {
  name: 'Transition',
  render() {
    return h(
      'hr', // tag name
      { class: ['docutils'] },
    )
  },
}
</script>
