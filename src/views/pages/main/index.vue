<template>
  <div>
    <h2>Список дел</h2>

    <p v-if="notes.length === 0">Список дел пуст</p>
    <main-note-list-comp v-else :notes="notes" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainNoteListComp from '@/views/pages/main/components/note-list/index.vue'

export default {
  name: 'MainPage',
  components: {
    MainNoteListComp
  },
  computed: {
    ...mapState(['notes'])
  }
}
</script>
