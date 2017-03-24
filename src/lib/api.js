import Firebase from 'firebase'
import {fromJS} from "immutable";

const config = {
    apiKey: "AIzaSyA1I-Wgu8blCHBSXE7Ripn3nnWdN4AZxBc",
    authDomain: "blocitoff-a9243.firebaseapp.com",
    databaseURL: "https://blocitoff-a9243.firebaseio.com",
    storageBucket: "blocitoff-a9243.appspot.com",
    messagingSenderId: "516179579226"
  };

const store = Firebase.initializeApp(config);

const db = {
  // writeRepoData(data) {
  //   store.database().ref(`/repos/${data.name}`).set(data);
  // },

  fetchAllRepoData() {
    const todoData = Firebase.database().ref('/todos/');
    return todoData.once("value", (snapshot) => {
      return snapshot;// Promise - asynchronous
    }).then((res) => {
      // look fromJS
      // console.log(fromJS(res.val()).toArray()[0].toObject())
      return fromJS(res.val()).toArray();
    })
  }
};

export default db;
