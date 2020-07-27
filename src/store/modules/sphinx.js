import SphinxService from '@/services/SphinxService'

export const namespaced = true

export const state = {
  pages: [],
  inflight: new Map(),
  downloadLocation: '/downloads',
}

export const mutations = {
  APPEND_PAGE(state, page) {
    state.pages.push(page)
  },
  ADD_INFLIGHT(state, id) {
    state.inflight.set(id, 'active')
  },
  REMOVE_INFLIGHT(state, id) {
    state.inflight.delete(id)
  },
  SET_DOWNLOAD_LOCATION(state, location) {
    state.downloadLocation = location
  },
}

export const actions = {
  fetchPage({ commit, getters }, page_name) {
    if (getters.isInflight(page_name)) {
      return
    }
    commit('ADD_INFLIGHT', page_name)
    return SphinxService.getPage('/v0.1.1', page_name)
      .then(response => {
        let parser = new DOMParser()
        let xmlDoc = parser.parseFromString(response.data, 'text/xml')
        const documentElement = xmlDoc.querySelector('document')
        commit('APPEND_PAGE', { id: page_name, page: documentElement })
        commit('REMOVE_INFLIGHT', page_name)
        return documentElement
      })
      .catch(() => {
        commit('REMOVE_INFLIGHT', page_name)
      })
  },
  setDownloadLocation({ commit }, location) {
    commit('SET_DOWNLOAD_LOCATION', location)
  },
}

export const getters = {
  getPageById: state => id => {
    return state.pages.find(page => page.id === id)
  },
  isInflight: state => id => {
    return !!state.inflight.get(id)
  },
  getDownloadLocation: state => () => {
    return state.downloadLocation
  },
}
