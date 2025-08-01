// Configuração do Firebase para ChegueiEdu
const firebaseConfig = {
  apiKey: "AIzaSyB0Jaw-Cy-wUyl-v0gqvkd6Pdetn1XyxSE",
  authDomain: "cheguei-edu.firebaseapp.com",
  databaseURL: "https://cheguei-edu-default-rtdb.firebaseio.com",
  projectId: "cheguei-edu",
  storageBucket: "cheguei-edu.firebasestorage.app",
  messagingSenderId: "964811049899",
  appId: "1:964811049899:web:b21112e0ee74298063e0ee"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Conexão com o Realtime Database
const db = firebase.database();