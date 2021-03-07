<template>
  <div class="figure-caption">
    <span class="figure-caption-heading">{{ getTitle }}: </span>
    <span class="figure-caption-content">{{ element.textContent }}</span>
  </div>
</template>

<script>
import { baseReference } from '../../mixins/BaseReference'

export default {
  name: 'FigureCaption',
  mixins: [baseReference],
  computed: {
    getTitle() {
      let title = this.$parent.$attrs.ids.split('-').join(' ')
      return title.charAt(0).toUpperCase() + title.slice(1)
    },
  },
}
</script>
