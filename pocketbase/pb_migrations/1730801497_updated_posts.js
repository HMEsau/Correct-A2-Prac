/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y90p0iw237104hg")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y90p0iw237104hg")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
