<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/NoteStore";

const noteStore = useNoteStore();
const title = ref("");
const content = ref("");
const category = ref("");

const submitForm = () => {
  const newNote = {
    title: title.value,
    content: content.value,
    category: category.value,
    date: new Date().toDateString(),
  };
  noteStore.addNote(newNote);
  title.value = "";
  content.value = "";
  category.value = "";
};
</script>
<template>
  <div>
    <h1>{{ $t("create_title") }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">{{ $t("form.title") }}</label>
        <input id="title" v-model="title" required />
      </div>
      <div>
        <label for="content">{{ $t("form.content") }}</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <div>
        <label for="category">{{ $t("form.category") }}</label>
        <select id="category" v-model="category" required>
          <option value="">{{ $t("form.please_choice") }}</option>
          <option value="work">Work</option>
          <option value="private">Private</option>
          <option value="family">Family</option>
        </select>
      </div>
      <button type="submit">{{ $t("form.gocreate") }}</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
form {
  max-width: 50%;
  margin: 30px auto;
  text-align: end;
  & > div {
    width: 100%;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      margin-right: 10px;
      font-weight: bolder;
    }
    input,
    select,
    textarea {
      border: 0;
      width: 85%;
      height: 40px;
    }
  }
}
</style>
