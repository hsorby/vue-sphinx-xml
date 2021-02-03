<template>
  <router-link v-if="isInternalReference()" :to="routeDescription">
    [{{ element.textContent }}]
  </router-link>
  <a v-else :href="element.getAttribute('refuri')" target="_blank">
    [{{ element.textContent }}]
  </a>
</template>

<script>
import { baseReference } from '../../mixins/BaseReference'

export default {
  name: 'FootnoteReference',
  mixins: [baseReference],
}
</script>
