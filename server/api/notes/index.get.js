export default defineEventHandler(async (event) => {
  const url = "http://localhost:3000/notes";

  const data = await $fetch(url);

  return data;
});
