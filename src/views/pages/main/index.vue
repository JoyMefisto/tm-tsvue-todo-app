<template>
  <div>
    <h2>Список дел</h2>

    <main-note-list-comp :notes="notes" />
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
