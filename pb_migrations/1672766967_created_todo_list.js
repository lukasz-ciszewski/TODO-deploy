migrate((db) => {
  const collection = new Collection({
    "id": "l1krrcar57fxzko",
    "created": "2023-01-03 17:29:27.763Z",
    "updated": "2023-01-03 17:29:27.763Z",
    "name": "todo_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eou6a842",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "94e1k9np",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tbn1kczc",
        "name": "status",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "parntfvq",
        "name": "to_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": "user = @request.auth.id",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l1krrcar57fxzko");

  return dao.deleteCollection(collection);
})
