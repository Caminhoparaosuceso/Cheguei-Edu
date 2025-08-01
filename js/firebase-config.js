// https://cheguei-edu-default-rtdb.firebaseio.com/
const firebaseConfig = {
  apiKey: "SUA_CHAVE",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "ID",
  appId: "ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();