import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export {firebase, db as default};

// const expenses = [
//     {
//         id: "1",
//         description: "Gum",
//         note: "",
//         amount: 195,
//         createdAt: 0
//     },
//     {
//         id: "2",
//         description: "Rent",
//         note: "",
//         amount: 195000,
//         createdAt: moment(0)
//             .subtract(4, "days")
//             .valueOf()
//     },
//     {
//         id: "3",
//         description: "Credit card",
//         note: "",
//         amount: 4500,
//         createdAt: moment(0)
//             .add(4, "days")
//             .valueOf()
//     }
// ];
//
// db.ref("expenses").on("child_removed", snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// db.ref("expenses").on("child_changed", snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// db.ref("expenses").on("child_added", snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });
// db.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({id:childSnapshot.key, ...childSnapshot.val()});
//         });
//         console.log(expenses);
//     }, e=>{
//         console.log(e);
//     });

// db.ref('expenses').push({
//     description: expenses[0].description,
//     note: expenses[0].note,
//     amount: expenses[0].amount,
//     createdAt: expenses[0].createdAt
// });
// db.ref('notes').push({title: 'test', note: 'if it works'});
//
// db.ref()
//     .on('value', snapshot=>{
//         console.log(`${snapshot.val().name} is ${snapshot.val().age} yo guy from ${snapshot.val().location.city}`);
//     }, (e)=> {
//         console.log('cannot fetch data', e)
//     });

// db.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e=>{
//         console.log('error fetching data');
//     });

// db.ref().set({
//     name: 'Jan MoDie',
//     age: 20,
//     isAwesome: true,
//     location: {
//         city: 'Gliwice',
//         country: 'Poland',
//     }
// }).then(()=>{
//     console.log('data saved')
// }).catch((e)=>{
//     cosole.log('This failed', e)
// });
//
// db.ref('location/city').set('Warszaffka');
//
// db.ref('attributes').set({
//     height: 183,
//     weight: 57
// }).then(()=>{
//     console.log('data saved')
// }).catch((e)=>{
//     cosole.log('This failed', e)
// });
//
// db.ref('isAwesome').remove();
