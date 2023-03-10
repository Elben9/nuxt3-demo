export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = decodeURIComponent(event.context.params!.id)
  return {
    getUserId: id,
    query,
  }
})
