const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Todos';
// Connect using MongoClient
MongoClient.connect(url, function (err, db) {
    // Use the admin database for the operation
    if (err) {
        console.log('connect to database faild');

    }

    console.log('connected to database' + db);
    db.collection('testColection').insertOne(
        {
            name: 'Tuowng Huynh',
            age: 24
        },
        function (err, rs) {
            if (err) {
                console.log('there are some error')
            }
            console.log('insert success')
        }
    )
    db.close();

});