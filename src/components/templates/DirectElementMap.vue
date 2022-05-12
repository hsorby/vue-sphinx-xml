
<template>
  <component :is="tag">
    <component
      v-for="(c, index) in children"
      :key="'standard_element_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </component>
</template>

<script setup>
// import { defineProps, toRefs } from 'vue'

// import { nodeMap } from '../../js/nodemap'
// import { useChildren } from '../../composables/computed'

// const props = defineProps({
//   node: {
//     type: undefined,
//     default: null,
//   },
//   componentName: {
//     type: String,
//   },
// })

// const { node } = toRefs(props)
// const { children } = useChildren(node)

// const tag = nodeMap.get(node.value.nodeName)
</script>

