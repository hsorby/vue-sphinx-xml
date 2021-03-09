<template>
  <router-link
    v-if="isInternalReference()"
    :to="routeDescription"
    :id="getRefid"
  >
    {{ getTitle }}
  </router-link>
  <a
    v-else
    :href="element.getAttribute('refuri')"
    target="_blank"
    :id="getRefid"
  >
   {{ getTitle }}
  </a>
</template>

<script>
import { baseReference } from '../../mixins/BaseReference'

export default {
  name: 'NumberReference',
  mixins: [baseReference],
  computed: {
    getRefid() {
      return this.element.getAttribute('refid')
    },
    getTitle() {
      let title = this.element.getAttribute('refid').split('-').join(' ')
      return 'Figure: ' + title.charAt(0).toUpperCase() + title.slice(1)
    }
  },
}
</script>
