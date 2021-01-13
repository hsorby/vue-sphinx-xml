import {
  renderBulletList,
  renderListItem,
  renderTitle,
  renderSection,
  renderParagraph,
  renderProblematic,
  renderReference,
  renderLiteralBlock,
  renderTopic,
  renderCompound,
  renderBlockQuote,
  renderMathBlock,
  renderContainer,
  renderEnumeratedList,
  renderPlainText,
  renderStrong,
  renderLiteral,
  renderInline,
  renderTitleReference,
  renderEmphasis,
  renderMath,
  renderTransition,
  renderDownloadReference,
  renderFigure,
  renderCaption,
  renderImage,
  renderTodoNode,
  // renderComment,
  renderTable,
  renderTableRow,
  renderTableBody,
  renderTableEntry,
  renderLineSingle,
  renderLineBlock, 
} from '../js/renderfcns'

export const sphinxChildren = {
  computed: {
    children() {
      let childComponents = []
      let target = null
      this.element.childNodes.forEach(node => {
        if ((node.nodeName === 'compact_paragraph') || (node.nodeName === 'tgroup')) {
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
    renderDispatcher(node, target) {
      let childComponent = null
      if (node.nodeName === 'list_item') {
        childComponent = renderListItem(node)
      } else if (node.nodeName === 'paragraph') {
        childComponent = renderParagraph(node)
      } else if (node.nodeName === 'reference') {
        childComponent = renderReference(node)
      } else if (node.nodeName === 'download_reference') {
        childComponent = renderDownloadReference(node)
      } else if (node.nodeName === 'title_reference') {
        childComponent = renderTitleReference(node)
      } else if (node.nodeName === 'bullet_list') {
        childComponent = renderBulletList(node)
      } else if (node.nodeName === 'enumerated_list') {
        childComponent = renderEnumeratedList(node)
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
      } else if (node.nodeName === 'section') {
        childComponent = renderSection(node, target)
      } else if (node.nodeName === 'literal_block') {
        childComponent = renderLiteralBlock(node)
      } else if (node.nodeName === 'literal') {
        childComponent = renderLiteral(node)
      } else if (node.nodeName === 'math_block') {
        childComponent = renderMathBlock(node)
      } else if (node.nodeName === 'math') {
        childComponent = renderMath(node)
      } else if (node.nodeName === 'figure') {
        childComponent = renderFigure(node)
      } else if (node.nodeName === 'image') {
        childComponent = renderImage(node)
      } else if (node.nodeName === 'caption') {
        childComponent = renderCaption(node)
      } else if (node.nodeName === 'topic') {
        childComponent = renderTopic(node)
      } else if (node.nodeName === 'compound') {
        childComponent = renderCompound(node)
      } else if (node.nodeName === 'container') {
        childComponent = renderContainer(node)
      } else if (node.nodeName === 'inline') {
        childComponent = renderInline(node)
      } else if (node.nodeName === 'block_quote') {
        childComponent = renderBlockQuote(node)
      } else if (node.nodeName === 'strong') {
        childComponent = renderStrong(node)
      } else if (node.nodeName === 'emphasis') {
        childComponent = renderEmphasis(node)
      } else if (node.nodeName === 'transition') {
        childComponent = renderTransition()
      } else if (node.nodeName === 'problematic') {
        childComponent = renderProblematic(node)
      } else if (node.nodeName === 'todo_node') {
        childComponent = renderTodoNode(node)
      } else if (node.nodeName === 'comment') {
        // Do nothing: ignore this type and its children.
        // childComponent = renderComment(node)
      } else if (node.nodeName === 'table') {
        childComponent = renderTable(node)
      } else if (node.nodeName === 'tbody') {
        childComponent = renderTableBody(node)
      } else if (node.nodeName === 'row') {
        childComponent = renderTableRow(node)
      } else if (node.nodeName === 'entry') {
        childComponent = renderTableEntry(node)
      } else if (node.nodeName === 'line') {
        childComponent = renderLineSingle(node)
      } else if (node.nodeName === 'line_block') {
        childComponent = renderLineBlock(node)
      } else if (node.nodeName === 'colspec') {
        // Do nothing: ignore this type and all its children.
      }
      else if (node.nodeName === '#text') {
        if (node.nodeValue.trim()) {
          childComponent = renderPlainText(node.nodeValue)
        }
      }
      else {
        console.log('node unknown:', node)
        throw `Element type not handled: '${node.nodeName}'`
      }
      return childComponent
    },
  },
}
