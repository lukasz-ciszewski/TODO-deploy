migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8rddoxv5u0b7797");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8rddoxv5u0b7797",
    "created": "2023-01-04 14:41:11.601Z",
    "updated": "2023-01-04 14:41:11.601Z",
    "name": "todo_sets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "efwnre3t",
        "name": "owner",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "xawd5hav",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
