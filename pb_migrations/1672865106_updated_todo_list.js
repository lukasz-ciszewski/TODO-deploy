migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  collection.deleteRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
