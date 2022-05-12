<template>
  <div :id="id" :class="classes">
    <component
      v-for="(c, index) in children"
      :key="'section_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

import { useChildren, useClasses } from '../../composables/computed'
import { useMethods } from '../../composables/methods'

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
const { extractId } = useMethods()
const { classes } = useClasses(node)

const { id } = extractId(node.value)

</script>
