export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const url = `http://localhost:3000/notes/${id}`;

  const data = await $fetch(url, {
    method: "delete",
  });
  return data;
});
