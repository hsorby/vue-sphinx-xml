import SphinxPage from './components/SphinxPage'
import * as SphinxStore from './store/modules/sphinx'

import BlockQuote from './components/templates/BlockQuote'
import Comment from './components/templates/Comment'
import Compound from './components/templates/Compound'
import Container from './components/templates/Container'
import Document_ from './components/templates/Document'
import DirectElementMap from './components/templates/DirectElementMap'
import DownloadReference from './components/templates/DownloadReference'
import Figure from './components/templates/Figure'
import FigureCaption from './components/templates/FigureCaption'
import Footnote from './components/templates/Footnote'
import FootnoteReference from './components/templates/FootnoteReference'
import Image from './components/templates/Image'
import LineBlock from './components/templates/LineBlock'
import LineSingle from './components/templates/LineSingle'
import Literal from './components/templates/Literal'
import LiteralBlock from './components/templates/LiteralBlock'
import Math_ from './components/templates/Math'
import MathBlock from './components/templates/MathBlock'
import NumberReference from './components/templates/NumberReference'
import Problematic from './components/templates/Problematic'
import Reference from './components/templates/Reference'
import Section from './components/templates/Section'
import Title from './components/templates/Title'
import TodoNode from './components/templates/TodoNode'
import Topic from './components/templates/Topic'
import Transition from './components/templates/Transition'

function install(Vue, options = {}) {
  if (!options.store) {
    throw 'Please provide a store!!'
  }

  options.store.registerModule('sphinx', SphinxStore)
}

if (
  BlockQuote ||
  Comment ||
  Compound ||
  Container ||
  DirectElementMap ||
  Document_ ||
  DownloadReference ||
  Figure ||
  FigureCaption ||
  Footnote ||
  FootnoteReference ||
  Image ||
  LineSingle ||
  LineBlock ||
  Literal ||
  LiteralBlock ||
  Math_ ||
  MathBlock ||
  NumberReference ||
  Problematic ||
  Reference ||
  Section ||
  Title ||
  TodoNode ||
  Topic ||
  Transition
) {
  // Are these things hidden?
}

export { SphinxPage }
export default { install }
