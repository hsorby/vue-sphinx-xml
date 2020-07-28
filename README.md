![logo](https://github.com/hsorby/vue-sphinx-xml/raw/master/docs/assetts/vue-sphinx-xml-logo.svg)
# vue-sphinx-xml

[![npm](https://img.shields.io/npm/v/vue-sphinx-xml.svg) ![npm](https://img.shields.io/npm/dm/vue-sphinx-xml.svg)](https://www.npmjs.com/package/vue-sphinx-
xml)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue component for displaying Sphinx documentation XML content.

## Project setup
```
npm install --save vue-sphinx-xml
```

### Module import

vue-sphinx-xml makes use of the vuex store to track data.  You must use a vuex store for the component to work.
**⚠️ You need to install the module with the application like so:**
```javascript
import Vue from 'vue'
import store from './store'
import SphinxXml from 'vue-sphinx-xml'

Vue.use(SphinxXml, { store })
```

Add the above to your `main.js` application file (this assumes that a standard layout is followed when creating your application).

### Module component

To use the vue-sphinx-xml component import it in a view and set the `baseURL` for the source XML.
Example view `Documentation.vue`:
```javascript
<template>
  <div class="documentation">
    <sphinx-xml baseURL="/sphinx-xml-files" />
  </div>
</template>

<script>
import { SphinxXml } from 'vue-sphinx-xml'

export default {
  name: 'Documentation',
  components: {
    SphinxXml
  }
}
</script>
```

### Module routing

vue-sphinx-xml requires that you use vue-router.  To add a vue-sphinx-xml route under `documentation` add the following to `routes` object for vue-router:
```javascript
  {
    path: '/documentation/:pageName*',
    name: 'Documentation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "documentation" */ '../views/Documentation.vue')
  }
```

Again assuming standard layout.

## Examples

For a complete example of a Vue application using vue-sphinx-xml look at https://github.com/hsorby/example-vue-sphinx-xml.
The master branch has a basic example of how vue-sphinx-xml may be used and the `multi_version` branch has an example of how vue-sphinx-xml may be used for different versions of Sphinx XML output.

---

## License

[Apache-2.0](https://opensource.org/licenses/Apache-2.0)

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
