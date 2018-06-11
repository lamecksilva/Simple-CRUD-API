var mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

mongoClient.connect("mongodb://localhost/CRUD")
    .then(conn => global.conn = conn.db("CRUD"))
    .catch(err => console.log(err))


function findAll(callback){
    global.conn.collection("customers").find({}).toArray(callback);
}

function insert(customer, callback) {
    global.conn.collection("customers").insert(customer, callback);
}

function findOne(id, callback){  
    global.conn.collection("customers").find(new ObjectId(id)).toArray(callback);
}

function update(id, customer, callback){
    global.conn.collection("customers").update({_id:new ObjectId(id)}, customer, callback);
}

function deleteOne(id, callback){
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }
