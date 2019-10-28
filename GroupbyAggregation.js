// to perform a group by query of the format
//     SELECT month(time) as month, transtypeid as transtype,sum(amount) as total,count(*) as freq FROM mpesaTransactions
//     GROUP BY month,transtype ORDER BY month DESC
// the equivalent MongoDB query is:

db.mpesaTransactions.aggregate([
    {"$group" : {
            _id:{month:{$month:"$time"},transtype:"$transtypeid"},
            total: {$sum:"$amount"},freq:{$sum:1}
        }},
    {$sort:{"_id.month":-1}}
])