export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log('test get api id query', query)
  console.log('test get api id event', event)
  const id = decodeURIComponent(event.context.params!.id)
  console.log('test api get id', id)
  return {
    getUserId: id,
  }
})
