const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017/'
const dbName = 'conFusion'
MongoClient.connect(url, (err, client) =>{

    assert.equal(err, null)

    console.log('Connected to the database')

    const db = client.db('dbName')

    const collection = db.collection('dishes')

    collection.insertOne({ "name": "tanvir", "description" : "I am a good boy" }, (err, result)=>{
        assert.equal(err, null)
        console.log("after insert \n")
        console.log(result.ops)

        collection.find({}).toArray((err ,docs)=>{
            assert.equal(err, null)

            console.log("Found \n")
            console.log(docs)

            db.dropCollection('dishes', (err, result) =>{
                assert.equal(err, null)
                client.close()
            })
        })
    })
})