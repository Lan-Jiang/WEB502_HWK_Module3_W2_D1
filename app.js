var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
];

var MongoClient = require('mongodb').MongoClient;

//statsdb is the database name
var url = "mongodb://localhost:27017/statsdb";

//connect to the db
MongoClient.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
    //    if (err) throw err;
    //    console.log("Database-statsdb created!");
    //    db.close();

    //task 2: create collection
    var dbo = db.db("statsdb");
    // dbo.createCollection("uscensus", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection-uscensus created!");
    //     db.close();
    // });

    //task 3: insert stat data
    // dbo.collection("uscensus").insertMany(stats, function(err, res) {
    //     if (err) throw err;
    //         console.log("Number of documents inserted:" + res.insertedCount);
    //         db.close();
    // });  
    
    //task 4: add new records 
    // var statsnew = [
    //     {
    //         'city': 'Pacoima', 
    //         'zip': '91331', 
    //         'state': 'CA', 
    //         'income': '60360',
    //         'age': '33'
    //     },
    //     {
    //         'city': 'Ketchikan', 
    //         'zip': '99950', 
    //         'state': 'AK', 
    //         'income': '000000',
    //         'age': '00'
    //     }
    // ];
    // dbo.collection("uscensus").insertMany(statsnew, function(err, res) {
    //     if (err) throw err;
    //         console.log("Number of documents inserted:" + res.insertedCount);
    //         db.close();
    // });  

    //task 5: find zip code for corona, NY
    // dbo.collection("uscensus").findOne({ city: "Corona", state: "NY"}, function(err, result){
    //            if (err) throw err;
    //             console.log("Zip of Corona, NY is " + result.zip);
    //             db.close();
    // });

    //task 6: find income for all cities in CA
    // var query = { state: /^CA/};
    // dbo.collection("uscensus").find(query).toArray(function(err, result) {
    //         if (err) throw err;
    //             console.log("Incomes of all cities in CA are " + result.map(item => (item["income"])));
    //             db.close();
    // });

    //task 7: update income and age for alaska
    // var myquery = { state: "AK" };
    // var newvalues = { $set: { income: "38910", age: "46" } };

    // dbo
    //   .collection("uscensus")
    //   .updateOne(myquery, newvalues, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 document updated - AK");
    //     db.close();
    //   });

    //task 8: sort ascending order by state
    var mysort = { state:1};
    dbo.collection("uscensus").find().sort(mysort).toArray(function(err, result) {
                if (err) throw err;
                console.log(`Sorted by state ascending list: `);
                console.log(result);
                db.close();
    });


});
