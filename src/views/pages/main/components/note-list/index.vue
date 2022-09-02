<template>
  <div>
    <ul>
      <main-note-comp v-for="(item, key) in notes" :key="key" :note="item" />
    </ul>
    <div>
      <input type="text" placeholder="Например, новая задача" v-model="noteText">
      <button :disabled="!noteText" @click="addNewNoteHandler">Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapMutations } from 'vuex'
import Note from '@/model/note'
import MainNoteComp from '@/views/pages/main/components/note/index.vue'

export default defineComponent({
  name: 'MainNoteListComp',
  components: {
    MainNoteComp
  },
  props: {
    notes: {
      type: Array as PropType<Array<Note>>,
      required: true
    }
  },
  data () {
    return {
      noteText: '',
      counter: 0
    }
  },
  methods: {
    ...mapMutations(['addNewNote']),
    /**
     * Добавляем новый пункт списка
     */
    addNewNoteHandler () {
      const newNote: Note = { text: this.noteText, id: this.counter++, isMarked: false }

      this.addNewNote(newNote)
      this.noteText = ''
    }
  }
})
</script>
