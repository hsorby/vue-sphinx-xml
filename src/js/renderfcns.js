export const renderDirectElementMap = (element, tagName) => {
  return {
    components: {
      DirectElementMap: () =>
        import('../components/templates/DirectElementMap'),
    },
    render(h) {
      return h('DirectElementMap', {
        props: {
          element,
          tagName,
        },
      })
    },
  }
}

export const renderSection = (element, level, extraIds) => {
  return {
    components: {
      Section: () => import('../components/templates/Section'),
    },
    render(h) {
      return h('Section', {
        props: {
          level,
          element,
          extraIds,
        },
      })
    },
  }
}

export const renderTitle = (element, level, isTopic) => {
  return {
    components: {
      Title: () => import('../components/templates/Title'),
    },
    render(h) {
      return h(
        'Title',
        {
          props: {
            element,
            level,
            isTopic,
          },
        },
        [element.innerText || element.textContent],
      )
    },
  }
}

export const renderPlainText = text => {
  return {
    render() {
      return this._v(text)
    },
  }
}

export const renderTransition = () => {
  return {
    render(h) {
      return h(
        'hr', // tag name
        { class: ['docutils'] },
      )
    },
  }
}

export const renderMath = element => {
  return {
    components: {
      Math: () => import('../components/templates/Math'),
    },
    render(h) {
      return h('Math', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderLineSingle = element => {
  return {
    components: {
      LineSingle: () => import('../components/templates/LineSingle'),
    },
    render(h) {
      return h('LineSingle', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderLineBlock = element => {
  return {
    components: {
      LineBlock: () => import('../components/templates/LineBlock'),
    },
    render(h) {
      return h('LineBlock', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderLiteralBlock = element => {
  return {
    components: {
      LiteralBlock: () => import('../components/templates/LiteralBlock'),
    },
    render(h) {
      return h('LiteralBlock', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderLiteral = element => {
  return {
    components: {
      Literal: () => import('../components/templates/Literal'),
    },
    render(h) {
      return h('Literal', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderMathBlock = element => {
  return {
    components: {
      MathBlock: () => import('../components/templates/MathBlock'),
    },
    render(h) {
      return h('MathBlock', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderProblematic = element => {
  return {
    components: {
      Problematic: () => import('../components/templates/Problematic'),
    },
    render(h) {
      return h('Problematic', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderTodoNode = element => {
  return {
    components: {
      TodoNode: () => import('../components/templates/TodoNode'),
    },
    render(h) {
      return h('TodoNode', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderReference = element => {
  return {
    components: {
      Reference: () => import('../components/templates/Reference'),
    },
    render(h) {
      return h('Reference', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderNumberReference = element => {
  return {
    components: {
      NumberReference: () => import('../components/templates/NumberReference'),
    },
    render(h) {
      return h('NumberReference', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderFootnoteReference = element => {
  return {
    components: {
      FootnoteReference: () =>
        import('../components/templates/FootnoteReference'),
    },
    render(h) {
      return h('FootnoteReference', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderFootnote = element => {
  return {
    components: {
      Footnote: () => import('../components/templates/Footnote'),
    },
    render(h) {
      return h('Footnote', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderDownloadReference = element => {
  return {
    components: {
      DownloadReference: () =>
        import('../components/templates/DownloadReference'),
    },
    render(h) {
      return h('DownloadReference', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderFigure = element => {
  return {
    components: {
      Figure: () => import('../components/templates/Figure'),
    },
    render(h) {
      return h('Figure', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderImage = element => {
  return {
    components: {
      SphinxImage: () => import('../components/templates/Image'),
    },
    render(h) {
      return h('SphinxImage', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderCompound = element => {
  return {
    components: {
      Compound: () => import('../components/templates/Compound'),
    },
    render(h) {
      return h('Compound', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderContainer = element => {
  return {
    components: {
      Container: () => import('../components/templates/Container'),
    },
    render(h) {
      return h('Container', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderTopic = element => {
  return {
    name: 'AnonymousTopic',
    components: {
      Topic: () => import('../components/templates/Topic'),
    },
    render(h) {
      return h('Topic', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderBlockQuote = element => {
  return {
    components: {
      BlockQuote: () => import('../components/templates/BlockQuote'),
    },
    render(h) {
      return h('BlockQuote', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderComment = element => {
  return {
    components: {
      Comment: () => import('../components/templates/Comment'),
    },
    render(h) {
      return h('Comment', {
        props: {
          element: element,
        },
      })
    },
  }
}
