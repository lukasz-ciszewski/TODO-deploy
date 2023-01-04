migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bpjnwbh",
    "name": "sets",
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
  collection.schema.removeField("2bpjnwbh")

  return dao.saveCollection(collection)
})
