migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tyjlaauq",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  // remove
  collection.schema.removeField("tyjlaauq")

  return dao.saveCollection(collection)
})
