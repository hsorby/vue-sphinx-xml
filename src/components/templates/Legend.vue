<template>
  <div :class="classes">
    <component
      v-for="(c, index) in children"
      :key="'container_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </div>
</template>

<script setup>
console.log("***** IN USE *****")
import { toRefs } from 'vue'

import { useChildren, useClasses } from '../../composables/computed'

const props = defineProps({
  node: {
    type: undefined,
    default: null,
  },
  componentName: {
    type: String,
  },
  properties: {
    type: Object,
  },
})

const { node } = toRefs(props)

const { children } = useChildren(node)
const { classes } = useClasses(node)
// import { baseDiv } from '../../mixins/BaseDiv'
// import { sphinxChildren } from '../../mixins/SphinxChildren'

// export default {
//   name: 'Legend',
//   mixins: [baseDiv, sphinxChildren],
//   computed: {
//     classes() {
//       return ['legend']
//     },
//   },
// }
</script>
