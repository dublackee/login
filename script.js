// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
    apiKey: "AIzaSyCTH8wDU0P26G2wKJ7bt0Ii3VegLnbw_qE",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "690322039641",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "690322039641",
    appId: "SEU_APP_ID"
};

// Inicializando Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Troca entre formulários
document.getElementById("login-link").addEventListener("click", function() {
    document.querySelectorAll(".login-container")[0].style.display = "none";
    document.querySelectorAll(".login-container")[1].style.display = "block";
});

document.getElementById("signup-link").addEventListener("click", function() {
    document.querySelectorAll(".login-container")[1].style.display = "none";
    document.querySelectorAll(".login-container")[0].style.display = "block";
});

// Cadastro de usuário
document.getElementById("signup").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Conta criada com sucesso!");
            window.location.href = "home.html"; // Redirecionar para a página principal
        })
        .catch((error) => {
            alert("Erro: " + error.message);
        });
});

// Login do usuário
document.getElementById("login").addEventListener("click", function() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login realizado com sucesso!");
            window.location.href = "home.html"; // Redirecionar para a página principal
        })
        .catch((error) => {
            alert("Erro: " + error.message);
        });
});