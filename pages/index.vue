<script setup>
import { ref } from "vue";

const noteStore = useNoteStore();
const switchLocalePath = useSwitchLocalePath();
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      crossorigin: "",
    },
  ],
});
noteStore.fetchNotes();
</script>

<template>
  <div class="app">
    <div class="lang">
      <NuxtLink :to="switchLocalePath('zh')">繁中</NuxtLink> /
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    </div>
    <header>
      <CreateNote />
    </header>
    <hr />
    <div class="filter">
      <button
        @click="noteStore.category = 'All'"
        :class="noteStore.category === 'All' ? 'active' : ''"
      >
        All
      </button>
      <button
        @click="noteStore.category = 'private'"
        :class="noteStore.category === 'private' ? 'active' : ''"
      >
        private
      </button>
      <button
        @click="noteStore.category = 'work'"
        :class="noteStore.category === 'work' ? 'active' : ''"
      >
        work
      </button>
      <button
        @click="noteStore.category = 'family'"
        :class="noteStore.category === 'family' ? 'active' : ''"
      >
        family
      </button>
    </div>
    <NoteList :notes="noteStore.filterNotes" />
  </div>
</template>

<style lang="scss" scoped>
.lang {
  position: absolute;
  right: 30px;
  color: rgb(43, 109, 222);
  a {
    font-size: 14px;
    text-decoration: none;
    color: rgb(43, 109, 222);
  }
}
header {
  text-align: center;
  .order {
    margin-top: 20px;
  }
}
.filter {
  margin: 20px auto 0;
  max-width: 960px;
  text-align: right;
}
</style>
