var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var link_map = document.querySelector(".contacts-button-map");
var popup_map = document.querySelector(".modal-map");
var close_map = document.querySelector(".modal-close-map");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");  
  if (storage) { 
    login.value = storage; 
    password.focus();
  } else {
    login.focus();
  }
});

link_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_map.classList.add("modal-show"); 
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popup_map.classList.remove("modal-show");
});

close_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_map.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) { 
  if (!login.value || !password.value) { 
    evt.preventDefault(); 
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");     
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }    
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (popup_map.classList.contains("modal-show")) {
      popup_map.classList.remove("modal-show");
    }
  }
});