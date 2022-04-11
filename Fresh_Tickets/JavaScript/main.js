const validCredentials = {
  username: 'fresh@tickets.com',
  password: 'qwerty',
};

/* ESTRUCTURAS DE DATOS */
const $username = document.getElementById('inUsername');
const $password = document.getElementById('inPassword');
const $submit = document.getElementById('submitBtn');
const $private = document.getElementById('private');
const $modal = document.getElementById('modal1');
const $success = document.getElementById('success');
const $error = document.getElementById('error');
const $close = document.getElementById('closeBtn');
//Desactivo el dropdown oculto
$private.style.visibility = "hidden";
//Funciones
const myCredentials = {
  username: null,
  password: null,
};
const cls_btn = () =>{
  $modal.click();
}

const handleUsername = (event) => {
  myCredentials.username = event.target.value;
};

const handlePassword = (event) => {
  myCredentials.password = event.target.value;
};

const handleSubmit = () => {
  const username = myCredentials.username === validCredentials.username; 
  const password = myCredentials.password === validCredentials.password;


  if (username && password) {
    setTimeout(() => {
      //Datos validos
      document.getElementById('private').style.visibility = "visible";
      document.getElementById('sign_in_btn').innerHTML = "Logged in"
      //Desactivo el modal
      document.getElementById('modal1').style.visibility="hidden";
      $modal.click();
    }, 500);
  } else {
    //Datos no validos
    console.log("fail")
    setTimeout(() => {
      $error.classList.add('d-none');
    }, 0);
  }
};

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  $username.addEventListener('input', handleUsername);
  $password.addEventListener('input', handlePassword);
  $submit.addEventListener('click', handleSubmit);
  $close.addEventListener('click', cls_btn);
});
////////////////////////////////////////////////////////////
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});