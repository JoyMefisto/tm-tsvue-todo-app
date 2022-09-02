import { createStore } from 'vuex'
import Note from '@/model/note'

export default createStore({
  strict: true,
  state: {
    notes: [] as Note[],
    currentNote: {}
  },
  getters: {
  },
  mutations: {
    addNewNote (state, note: Note) {
      state.notes.push(note)
    },
    removeNote (state, payload: Note) {
      const note = state.notes.find(note => note.id === payload.id)
      const index = state.notes.indexOf(note as Note)

      state.notes.splice(index, 1)
    },
    updateText (state, payload: Note) {
      const note = state.notes.find(note => note.id === payload.id)
      const index = state.notes.indexOf(note as Note)

      state.notes[index] = payload
    },
    updateMarked (state, payload: Note) {
      const note = state.notes.find(note => note.id === payload.id)
      const index = state.notes.indexOf(note as Note)

      state.notes[index] = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
