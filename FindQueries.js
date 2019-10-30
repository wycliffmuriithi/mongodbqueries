// a simple find query

db.mpesaTransactions.find({

})


//a find query with a less than condition

db.mpesaTransactions.find({
    "time": {"$lt":ISODate("2019-04-29T00:00:00.000Z")}
})