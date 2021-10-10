<template>
  <router-link :to="routeDescription">
    <span class="problematic" :id="id">{{
      element.textContent
    }}</span></router-link
  >
</template>

<script>
export default {
  name: 'Problematic',
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  data() {
    const ids = this.element.getAttribute('ids').split(' ')
    return {
      id: ids[0],
      routeDescription: {
        path: '',
        hash: `#${this.element.getAttribute('refid')}`,
      },
    }
  },
}
</script>
