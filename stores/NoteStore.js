import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: [],
    category: "All",
    loading: false,
  }),
  getters: {
    filterNotes(state) {
      if (this.category === "All") return this.notes;
      else {
        return this.notes.filter((n) => n.category === this.category);
      }
    },
  },
  actions: {
    async fetchNotes() {
      this.loading = true;
      const data = await fetch("http://localhost:8000/api/notes").then((res) =>
        res.json()
      );
      this.notes = data;
      this.loading = false;
    },
    async addNote(newNote) {
      this.notes.push({ id: Math.floor(Math.random() * 10000), ...newNote });
      const res = await fetch("http://localhost:8000/api/notes", {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteNote(id) {
      console.log(id);
      this.notes = this.notes.filter((n) => n.id !== id);

      const res = await fetch("http://localhost:8000/api/notes/" + id, {
        method: "DELETE",
      });

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
