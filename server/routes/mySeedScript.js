// const faker = require("faker");
// const MongoClient = require("mongodb").MongoClient;

// function randomIntFromInterval(min, max) {
//     // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// async function seedDB() {
//     // Connection URL
//     const uri =
//         "mongodb+srv://chs:chlgustjr1!@boilerplate.z1w0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//     const client = new MongoClient(uri, {
//         useNewUrlParser: true,
//         // useUnifiedTopology: true,
//     });

//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//         const collection = client.db("boilerplate").collection("authboards");

//         // The drop() command destroys all data from a collection.
//         // Make sure you run it against proper database and collection.
//         collection.drop();

//         // make a bunch of time series data
//         let timeSeriesData = [];

//         for (let i = 0; i < 100; i++) {
//             const firstName = faker.name.firstName();
//             const lastName = faker.name.lastName();
//             let newDay = {
//                 timestamp_day: faker.date.past(),
//                 cat: faker.random.word(),
//                 owner: {
//                     email: faker.internet.email(firstName, lastName),
//                     firstName,
//                     lastName,
//                 },
//                 events: [],
//             };

//             for (let j = 0; j < randomIntFromInterval(1, 6); j++) {
//                 let newEvent = {
//                     timestamp_event: faker.date.past(),
//                     weight: randomIntFromInterval(14, 16),
//                 };
//                 newDay.events.push(newEvent);
//             }
//             timeSeriesData.push(newDay);
//         }
//         collection.insertMany(timeSeriesData);

//         console.log("Database seeded! :)");
//         client.close();
//     } catch (err) {
//         console.log(err.stack);
//     }
// }

// seedDB();
