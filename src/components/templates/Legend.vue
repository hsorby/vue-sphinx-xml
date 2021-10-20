<script>
import { baseDiv } from '../../mixins/BaseDiv'
import { sphinxChildren } from '../../mixins/SphinxChildren'

export default {
  name: 'Legend',
  mixins: [baseDiv, sphinxChildren],
  computed: {
    classes() {
      return ['legend']
    },
  },
}
</script>
