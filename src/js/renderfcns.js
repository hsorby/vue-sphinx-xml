export const renderBulletList = element => {
  return {
    components: {
      BulletList: () => import('../components/templates/BulletList'),
    },
    render(h) {
      return h('BulletList', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderEnumeratedList = element => {
  return {
    components: {
      EnumeratedList: () => import('../components/templates/EnumeratedList'),
    },
    render(h) {
      return h('EnumeratedList', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderRubric = element => {
  return {
    components: {
      Rubric: () => import('../components/templates/Rubric'),
    },
    render(h) {
      return h('Rubric', {
        props: {
          element: element,
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

export const renderInline = element => {
  return {
    components: {
      Inline: () => import('../components/templates/Inline'),
    },
    render(h) {
      return h('Inline', {
        props: {
          element,
        },
      })
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

export const renderTitleReference = element => {
  return {
    components: {
      TitleReference: () => import('../components/templates/TitleReference'),
    },
    render(h) {
      return h('TitleReference', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderEmphasis = element => {
  return {
    components: {
      Emphasis: () => import('../components/templates/Emphasis'),
    },
    render(h) {
      return h('Emphasis', {
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

export const renderStrong = element => {
  return {
    components: {
      Strong: () => import('../components/templates/Strong'),
    },
    render(h) {
      return h('Strong', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderSuperscript = element => {
  return {
    components: {
      Superscript: () => import('../components/templates/Superscript'),
    },
    render(h) {
      return h('Superscript', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderSubscript = element => {
  return {
    components: {
      Subscript: () => import('../components/templates/Subscript'),
    },
    render(h) {
      return h('Subscript', {
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

export const renderParagraph = element => {
  return {
    components: {
      Paragraph: () => import('../components/templates/Paragraph'),
    },
    render(h) {
      return h('Paragraph', {
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

export const renderCaption = element => {
  return {
    components: {
      Caption: () => import('../components/templates/Caption'),
    },
    render(h) {
      return h('Caption', {
        props: {
          element,
        },
      })
    },
  }
}

export const renderListItem = element => {
  return {
    components: {
      ListItem: () => import('../components/templates/ListItem'),
    },
    render(h) {
      return h('ListItem', {
        props: {
          element: element,
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

export const renderGlossary = element => {
  return {
    components: {
      Glossary: () => import('../components/templates/Glossary'),
    },
    render(h) {
      return h('Glossary', {
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

export const renderTable = element => {
  return {
    components: {
      Table: () => import('../components/templates/Table'),
    },
    render(h) {
      return h('Table', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderTableBody = element => {
  return {
    components: {
      TableBody: () => import('../components/templates/TableBody'),
    },
    render(h) {
      return h('TableBody', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderTableHead = element => {
  return {
    components: {
      TableHead: () => import('../components/templates/TableHead'),
    },
    render(h) {
      return h('TableHead', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderTableRow = element => {
  return {
    components: {
      TableRow: () => import('../components/templates/TableRow'),
    },
    render(h) {
      return h('TableRow', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderTableEntry = element => {
  return {
    components: {
      TableEntry: () => import('../components/templates/TableEntry'),
    },
    render(h) {
      return h('TableEntry', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderDefinitionList = element => {
  return {
    components: {
      DefinitionList: () => import('../components/templates/DefinitionList'),
    },
    render(h) {
      return h('DefinitionList', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderDefinitionListItem = element => {
  return {
    components: {
      DefinitionListItem: () =>
        import('../components/templates/DefinitionListItem'),
    },
    render(h) {
      return h('DefinitionListItem', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderDefinition = element => {
  return {
    components: {
      Definition: () => import('../components/templates/Definition'),
    },
    render(h) {
      return h('Definition', {
        props: {
          element: element,
        },
      })
    },
  }
}

export const renderTerm = element => {
  return {
    components: {
      Term: () => import('../components/templates/Term'),
    },
    render(h) {
      return h('Term', {
        props: {
          element: element,
        },
      })
    },
  }
}
