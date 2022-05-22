<template>
  <a :href="href" :download="saveFilename" :class="classes" >{{ saveFilename }}</a>
</template>

<script setup>
import { computed, toRefs, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import { determineRouteUrl } from '../../js/utilities'

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
const route = useRoute()
const store = useStore()

const href = computed(() => {
  let downloadHref = node.value.getAttribute('filename')
  if (
    downloadHref &&
    !downloadHref.startsWith('/') &&
    !downloadHref.startsWith('http')
  ) {
    const routeURL = determineRouteUrl(route)
    downloadHref = [
      store.getters['sphinx/getDownloadURL'](routeURL),
      downloadHref,
    ].join('/')
  }
  return downloadHref
})

const targetParts = node.value.getAttribute('reftarget').split('/')
const downloadName = targetParts[targetParts.length - 1]
const classes = ['reference', 'internal', node.value.getAttribute('reftype')]

// Need to use a refernce variable in the template bound attributes.
const saveFilename = ref('not-set')
saveFilename.value = downloadName
</script>
