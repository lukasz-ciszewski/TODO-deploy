migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  collection.viewRule = "user = @request.auth.id"
  collection.createRule = "user = @request.auth.id"
  collection.updateRule = "user = @request.auth.id"
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
