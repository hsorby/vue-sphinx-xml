<script>
// import Vue from 'vue'
// import Title from '@/components/sphinx/templates/Title'
// import Section from 'src/components/sphinx/templates/Section'
import { sphinxChildren } from '@/mixins/SphinxChildren'

export default {
  name: 'Document',
  // components: {
  //   Title: () => import('@/components/sphinx/templates/Title'),
  //   Section: () => import('@/components/sphinx/templates/Section'),
  // },
  // created() {
  //   console.log('created document')
  //   Vue.component('title', Title)
  //   Vue.component('section', 'Section')
  // },
  props: {
    element: { type: Element, required: true },
    id: { type: String },
  },
  mixins: [sphinxChildren],
  render: function(h) {
    return h(
      'div', // tag name
      {
        attrs: {
          id: this.id,
        },
      }, // options
      this.children.map(child => h(child)), // array of children
    )
  },
}
</script>

<style scoped></style>
