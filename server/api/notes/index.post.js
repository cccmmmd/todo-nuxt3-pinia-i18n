export default defineEventHandler(async (event) => {
  const url = "http://localhost:3000/notes";
  const body = await readBody(event);

  const data = await $fetch(url, {
    method: "post",
    body,
  });

  return data;
});
