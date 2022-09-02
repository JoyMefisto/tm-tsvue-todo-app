<template>
  <li class="main-note">
    <input type="checkbox" v-model="changeCheckbox">
    <input v-if="isEdit" type="text" v-model="changeText" />
    <p v-else :class="['main-note__text', {'main-note__text_line-through': changeCheckbox }]">{{ note.text }}</p>

    <button :disabled="!this.tempNote.text" v-if="isEdit" @click="editNoteHandler">Сохранить</button>
    <button v-else @click="editNoteHandler">Редактировать</button>

    <button v-if="isEdit" @click="cancelNoteHandler">Отмена</button>
    <button v-else @click="removeNoteHandler">Удалить</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapMutations } from 'vuex'
import Note from '@/model/note'

export default defineComponent({
  name: 'MainNoteComp',
  props: {
    note: {
      type: Object as PropType<Note>,
      required: true
    }
  },
  data () {
    return {
      isEdit: false,
      tempNote: { ...this.note }
    }
  },
  computed: {
    /**
     * Работаем с текстом временной заметки
     */
    changeText: {
      get (): string {
        return this.tempNote.text
      },
      set (value: string) {
        this.tempNote = { ...this.tempNote, text: value }
      }
    },
    /**
     * Работаем с чекбоксом как временной заметки так и основной
     */
    changeCheckbox: {
      get (): boolean {
        return this.note.isMarked
      },
      set (value: boolean) {
        this.tempNote = { ...this.tempNote, isMarked: value }
        this.updateMarked({ ...this.note, isMarked: value })
      }
    }
  },
  methods: {
    ...mapMutations(['removeNote', 'updateText', 'updateMarked']),
    /**
     * Удаляем основную заметку
     */
    removeNoteHandler () {
      this.removeNote(this.note)
    },
    /**
     * Отменяем изменения временной заметки
     */
    cancelNoteHandler () {
      this.isEdit = !this.isEdit
      this.tempNote = { ...this.note }
    },
    /**
     * Сохраняем изменения временной заметки в основной
     */
    editNoteHandler () {
      this.updateText(this.tempNote)
      this.isEdit = !this.isEdit
    }
  }
})
</script>

<style lang="scss">
.main-note {
  display: flex;
  align-items: center;

  &__text {
    min-width: 100px;

    &_line-through {
      text-decoration: line-through;
    }
  }
}
</style>
