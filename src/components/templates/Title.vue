<template>
  <component :is="tagName" :class="classes">
     <component
      v-for="(c, index) in children"
      :key="'title_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
 </component>
</template>
<script setup>
import { computed, toRefs } from 'vue'

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
    required: true,
  },
})

const { node, properties } = toRefs(props)

const { children } = useChildren(node)

const depth = properties.value.depth
const isTopic = properties.value.isTopic

const tagName = computed(() => {
  let tagName = 'h' + depth
  if (isTopic) {
    tagName = 'p'
  }
  return tagName
})

const classes = computed(() => {
  let classes = []
  if (isTopic) {
    classes.push('topic-title')
    if (depth === 1) {
      classes.push('first')
    }
  }
  return classes
})
</script>
