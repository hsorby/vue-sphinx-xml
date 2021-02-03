export const baseSection = {
  props: {
    targetId: {
      type: String,
    },
  },

  render: function(h) {
    return h(
      'section', // tag name
      {
        attrs: {
          id: this.id,
        },
      }, // options
      [
        ...this.renderExtraIdsSpans.map(span => h(span)),
        ...this.children.map(child => h(child)),
      ], // array of children
    )
  },

  data() {
    let separateIds = this.separateIds(this.element)
    return {
      id: separateIds.id,
      extraIds: separateIds.extraIds,
    }
  },

  computed: {
    renderExtraIdsSpans() {
      let spans = []
      this.extraIds.forEach(id => {
        spans.push({
          render: function(h) {
            return h('span', { attrs: { id } })
          },
        })
      })
      return spans
    },
  },

  methods: {
    separateIds(element) {
      const ids = element.getAttribute('ids')
      let splitIds = ids.split(' ')
      if (this.targetId && splitIds.indexOf(this.targetId) < 0) {
        splitIds.push(this.targetId)
      }
      return { id: splitIds.splice(0, 1), extraIds: splitIds }
    },
  },
}
