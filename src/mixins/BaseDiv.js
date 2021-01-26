export const baseDiv = {
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    classes() {
      let classesString = this.element.getAttribute('classes')
      let classes = []
      if (classesString) {
        classes = classesString.split(' ')
      }
      return [this.$options.name.toLowerCase(), ...classes]
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
