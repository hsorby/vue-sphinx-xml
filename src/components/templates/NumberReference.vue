<template>
  <router-link v-if="isInternalReference()" :to="routeDescription">
    {{ getTitle }}
  </router-link>
  <a v-else :href="element.getAttribute('refuri')" target="_blank">
    {{ getTitle }}
  </a>
</template>

<script>
import { baseReference } from '../../mixins/BaseReference'

export default {
  name: 'NumberReference',
  mixins: [baseReference],
  computed: {
    getTitle() {
      let title = this.element
        .getAttribute('refid')
        .split('-')
        .join(' ')
      return 'Figure: ' + title.charAt(0).toUpperCase() + title.slice(1)
    },
  },
}
</script>
