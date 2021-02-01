import SphinxPage from './components/SphinxPage'
import * as SphinxStore from './store/modules/sphinx'

import BlockQuote from './components/templates/BlockQuote'
import BulletList from './components/templates/BulletList'
import Caption from './components/templates/Caption'
import Comment from './components/templates/Comment'
import Compound from './components/templates/Compound'
import Container from './components/templates/Container'
import Definition from './components/templates/Definition'
import DefinitionList from './components/templates/DefinitionList'
import DefinitionListItem from './components/templates/DefinitionListItem'
import Document from './components/templates/Document'
import DownloadReference from './components/templates/DownloadReference'
import Emphasis from './components/templates/Emphasis'
import EnumeratedList from './components/templates/EnumeratedList'
import Figure from './components/templates/Figure'
import Image from './components/templates/Image'
import Inline from './components/templates/Inline'
import LineBlock from './components/templates/LineBlock'
import LineSingle from './components/templates/LineSingle'
import ListItem from './components/templates/ListItem'
import Literal from './components/templates/Literal'
import LiteralBlock from './components/templates/LiteralBlock'
import Math_ from './components/templates/Math'
import MathBlock from './components/templates/MathBlock'
import NumberReference from './components/templates/NumberReference'
import Paragraph from './components/templates/Paragraph'
import Problematic from './components/templates/Problematic'
import Reference from './components/templates/Reference'
import Reusable from './components/templates/Reusable'
import Section from './components/templates/Section'
import Strong from './components/templates/Strong'
import Table from './components/templates/Table'
import TableBody from './components/templates/TableBody'
import TableEntry from './components/templates/TableEntry'
import TableRow from './components/templates/TableRow'
import Term from './components/templates/Term'
import Title from './components/templates/Title'
import TitleReference from './components/templates/TitleReference'
import TodoNode from './components/templates/TodoNode'
import Topic from './components/templates/Topic'
import Transition from './components/templates/Transition'

function install(Vue, options = {}) {
  if (!options.store) {
    throw 'Please provide a store!!'
  }

  // Vue.component('your-component', yourComponent)

  options.store.registerModule('sphinx', SphinxStore)
}

if (
  BlockQuote ||
  BulletList ||
  Caption ||
  Comment ||
  Compound ||
  Container ||
  Definition ||
  DefinitionList ||
  DefinitionListItem ||
  Document ||
  DownloadReference ||
  Emphasis ||
  EnumeratedList ||
  Figure ||
  Image ||
  Inline ||
  LineSingle ||
  LineBlock ||
  ListItem ||
  Literal ||
  LiteralBlock ||
  Math_ ||
  MathBlock ||
  NumberReference ||
  Paragraph ||
  Problematic ||
  Reference ||
  Reusable ||
  Section ||
  Strong ||
  Table ||
  TableBody ||
  TableEntry ||
  TableRow ||
  Term ||
  Title ||
  TitleReference ||
  TodoNode ||
  Topic ||
  Transition
) {
  // Are these things hidden?
}

export { SphinxPage }
export default { install }
