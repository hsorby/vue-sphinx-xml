<template>
  <div :="attrs">
    <component
      v-for="(c, index) in children"
      :key="'footnote_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue'

import { useMethods } from '../../composables/methods'
import { useChildren } from '../../composables/computed'

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
const { dataObject } = useMethods()
const attrs = ref({})

attrs.value = dataObject(node.value, ['footnote']).attrs // import { h } from 'vue'

// import { sphinxChildren } from '../../mixins/SphinxChildren'

// export default {
//   name: 'Footnote',
//   mixins: [sphinxChildren],
//   render() {
//     return h(
//       'div', // tag name
//       this.dataObject(['footnote']),
//       this.children.map(child => h(child)), // array of children
//     )
//   },
// }
</script>
