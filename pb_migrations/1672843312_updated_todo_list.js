migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovfzi3ob",
    "name": "sets",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "8rddoxv5u0b7797",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  // remove
  collection.schema.removeField("ovfzi3ob")

  return dao.saveCollection(collection)
})
