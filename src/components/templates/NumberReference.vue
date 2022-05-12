<template>
  <router-link v-if="isInternalReference(node)" :to="routeDescription">
    {{ title }}
  </router-link>
  <a v-else :href="node.getAttribute('refuri')" target="_blank">
    {{ title }}
  </a>
</template>

<script setup>
import { computed, onMounted, toRefs, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useMethods } from '../../composables/methods'
import { useBaseReference } from '../../composables/basereference'

const props = defineProps({
  node: {
    type: undefined,
    default: null,
  },
  componentName: {
    type: String,
  },
})

const routeDescription = ref({path: '', hash: ''})
const { node } = toRefs(props)
const route = useRoute()

const { isInternalReference } = useMethods()
const { onReferenceCreated } = useBaseReference(node.value, route, routeDescription)

onMounted(onReferenceCreated)

const title = computed(() => {
  let refLabel = node.value.getAttribute('refid')
  if (!refLabel) {
    refLabel = node.value.getAttribute('refuri')
  }
  const t = refLabel.replace('-', ' ')
  return 'Figure: ' + t.charAt(0).toUpperCase() + t.slice(1)
})
// import { baseReference } from '../../mixins/BaseReference'

// export default {
//   name: 'NumberReference',
//   mixins: [baseReference],
//   computed: {
//     getTitle() {
//       let title = this.element
//         .getAttribute('refid')
//         .split('-')
//         .join(' ')
//       return 'Figure: ' + title.charAt(0).toUpperCase() + title.slice(1)
//     },
//   },
// }
</script>
