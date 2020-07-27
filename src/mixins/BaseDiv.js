export const baseDiv = {
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    classes() {
      return [
        this.$options.name.toLowerCase(),
        ...this.element.getAttribute('classes').split(' '),
      ]
    },
  },

  render: function(h) {
    return h(
      'div',
      { class: this.classes },
      this.children.map(child => h(child)),
    )
  },
}
