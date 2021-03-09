import {
  renderBlockQuote,
  renderComment,
  renderCompound,
  renderContainer,
  renderDirectElementMap,
  renderDownloadReference,
  renderFigure,
  renderFigureCaption,
  renderFootnote,
  renderFootnoteReference,
  renderImage,
  renderLineBlock,
  renderLineSingle,
  renderLiteral,
  renderLiteralBlock,
  renderMath,
  renderMathBlock,
  renderNumberReference,
  renderPlainText,
  renderProblematic,
  renderReference,
  renderSection,
  renderTitle,
  renderTodoNode,
  renderTopic,
  renderTransition,
} from '../js/renderfcns'

const isEmpty = d => {
  for (const i in d) {
    return false
  }

  return true
}

export const sphinxChildren = {
  props: {
    element: {
      type: Element,
    },
  },
  computed: {
    children() {
      let childComponents = []
      let target = null
      this.element.childNodes.forEach(node => {
        if (
          node.nodeName === 'compact_paragraph' ||
          node.nodeName === 'tgroup'
        ) {
          // Skip over this wrapper and directly add its children to this element.
          let childTarget = null
          node.childNodes.forEach(childNode => {
            if (node.nodeName === 'target') {
              childTarget = node.getAttribute('refid')
            } else {
              const childComponent = this.renderDispatcher(
                childNode,
                childTarget,
              )
              if (childComponent) {
                childComponents.push(childComponent)
              }
            }
          })
        } else if (node.nodeName === 'target') {
          target = node.getAttribute('refid')
        } else {
          const childComponent = this.renderDispatcher(node, target)
          if (childComponent) {
            childComponents.push(childComponent)
          }
        }
      })
      return childComponents
    },
  },

  methods: {
    dataObject(additionalClasses) {
      let dO = {}

      let classes = [...this.element.classList]
      if (additionalClasses) {
        classes = classes.concat(additionalClasses)
      }

      const id = this.extractId()
      const attributes = this.attributes()

      if (classes.length) {
        dO['class'] = classes
      }
      if (!isEmpty(attributes) || !isEmpty(id)) {
        dO['attrs'] = {
          ...id,
          ...attributes,
        }
      }
      return dO
    },
    attributes() {
      const unrequiredAttrs = ['uri', 'ids', 'names', 'candidates', 'classes']
      const styleAttrs = ['width']
      let style = ''
      let attrDict = {}
      this.element.attributes.forEach(attr => {
        if (styleAttrs.includes(attr.name)) {
          style += `${attr.name}: ${attr.value};`
        } else if (!unrequiredAttrs.includes(attr.name)) {
          attrDict[attr.name] = attr.value
        }
      })
      if (style) {
        attrDict.style = style
      }
      return attrDict
    },
    extractId() {
      // Inserting the id of the first term in a collection as the contents of the item.
      if (
        this.element.getAttribute('ids') &&
        this.element.getAttribute('ids').length > 0
      ) {
        const ids = this.element.getAttribute('ids').split(' ')
        const id = ids[0]
        return {
          id,
        }
      }
      return {}
    },
    renderDispatcher(node, target) {
      const nodeMap = new Map([
        ['bullet_list', 'ul'],
        ['definition', 'dd'],
        ['definition_list', 'dl'],
        ['definition_list_item', 'dt'],
        ['emphasis', 'em'],
        ['enumerated_list', 'ol'],
        ['glossary', 'div'],
        ['inline', 'span'],
        ['label', 'span'],
        ['list_item', 'li'],
        ['paragraph', 'p'],
        ['rubric', 'h3'],
        ['strong', 'strong'],
        ['subscript', 'sub'],
        ['superscript', 'sup'],
        ['table', 'table'],
        ['tbody', 'tbody'],
        ['entry', 'td'],
        ['row', 'tr'],
        ['thead', 'thead'],
        ['term', 'dt'],
        ['title_reference', 'cite'],
      ])
      let childComponent = null
      if (nodeMap.has(node.nodeName)) {
        const tagName = nodeMap.get(node.nodeName)
        childComponent = renderDirectElementMap(node, tagName)
      } else {
        if (node.nodeName === 'block_quote') {
          childComponent = renderBlockQuote(node)
        } else if (node.nodeName === 'caption') {
          childComponent = renderFigureCaption(node)
        } else if (node.nodeName === 'colspec') {
          // Do nothing: ignore this type and all its children.
        } else if (node.nodeName === 'comment') {
          childComponent = renderComment(node)
        } else if (node.nodeName === 'compound') {
          childComponent = renderCompound(node)
        } else if (node.nodeName === 'container') {
          childComponent = renderContainer(node)
        } else if (node.nodeName === 'download_reference') {
          childComponent = renderDownloadReference(node)
        } else if (node.nodeName === 'figure') {
          childComponent = renderFigure(node)
        } else if (node.nodeName === 'footnote') {
          childComponent = renderFootnote(node)
        } else if (node.nodeName === 'footnote_reference') {
          childComponent = renderFootnoteReference(node)
        } else if (node.nodeName === 'image') {
          childComponent = renderImage(node)
        } else if (node.nodeName === 'index') {
          // Do nothing: ignore this type and its children.
        } else if (node.nodeName === 'line') {
          childComponent = renderLineSingle(node)
        } else if (node.nodeName === 'line_block') {
          childComponent = renderLineBlock(node)
        } else if (node.nodeName === 'literal') {
          childComponent = renderLiteral(node)
        } else if (node.nodeName === 'literal_block') {
          childComponent = renderLiteralBlock(node)
        } else if (node.nodeName === 'math') {
          childComponent = renderMath(node)
        } else if (node.nodeName === 'math_block') {
          childComponent = renderMathBlock(node)
        } else if (node.nodeName === 'number_reference') {
          childComponent = renderNumberReference(node)
        } else if (node.nodeName === 'problematic') {
          childComponent = renderProblematic(node)
        } else if (node.nodeName === 'reference') {
          childComponent = renderReference(node)
        } else if (node.nodeName === 'section') {
          childComponent = renderSection(node, target)
        } else if (node.nodeName === 'title') {
          let parent = this.$parent
          let depth = 1
          let isTopic = false
          if (parent.$options.name === 'AnonymousTopic') {
            isTopic = true
          } else {
            while (parent && parent.$options.name !== 'SphinxPage') {
              if (parent.$options.name === 'Section') {
                depth += 1
              }
              parent = parent.$parent
            }
          }
          childComponent = renderTitle(node, depth, isTopic)
        } else if (node.nodeName === 'todo_node') {
          childComponent = renderTodoNode(node)
        } else if (node.nodeName === 'topic') {
          childComponent = renderTopic(node)
        } else if (node.nodeName === 'transition') {
          childComponent = renderTransition()
        } else if (node.nodeName === '#text') {
          if (node.nodeValue.trim()) {
            childComponent = renderPlainText(node.nodeValue)
          }
        } else {
          throw `Sphinx XML element type not handled: '${node.nodeName}'`
        }
      }
      return childComponent
    },
  },
}
