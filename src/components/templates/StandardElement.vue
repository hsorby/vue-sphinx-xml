<template>
  <component :is="tag" :="attrs">
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
import { defineProps, toRefs, ref } from 'vue'

import { nodeNameTagNameMap } from '../../js/nodemap'
import { useChildren } from '../../composables/computed'
import { useMethods } from '../../composables/methods'

const props = defineProps({
  node: {
    type: undefined,
    default: null,
  },
  componentName: {
    type: String,
  },
})

const { node } = toRefs(props)
const { children } = useChildren(node)
const { dataObject } = useMethods()
const attrs = ref({})

const transferAttributes= new Set(['div', 'button'])
const tag = nodeNameTagNameMap.get(node.value.nodeName)

if (transferAttributes.has(node.value.nodeName)) {
  attrs.value = dataObject(node.value).attrs
}
</script>
