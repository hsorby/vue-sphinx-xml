<template>
  <section :id="id">
    <span v-for="(s, index) in extraIds" :key="'id_span_' + index" :id="s" />
    <component
      v-for="(c, index) in children"
      :key="'section_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </section>
</template>

<script setup>
import { toRefs } from 'vue'

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
  }
})

const { node } = toRefs(props)

const { extractId, separateIds } = useMethods()
const { id } = extractId(node.value)
const { extraIds } = separateIds(node.value, id)

const { children } = useChildren(node)
</script>
