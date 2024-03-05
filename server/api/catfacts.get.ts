export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const response = await fetch(`${config.baseUrl}`);
  const { data } = await response.json();
  return {
    catfact: data[0],
  };
});
