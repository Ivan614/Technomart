// script for order
var btnGoodsBuy = document.querySelectorAll(".button-goods-buy");
var popupOrder = document.querySelector(".popup-order");
var closeOrder = popupOrder.querySelector(".popup-order-close");
var btnOrderContinue = popupOrder.querySelector(".button-popup-order-continue");

btnGoodsBuy.forEach(function (entry) {
    entry.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.add("modal-show");
   });
});

closeOrder.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.remove("modal-show");
});

btnOrderContinue.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupOrder.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupOrder.classList.contains("modal-show")) {
			popupOrder.classList.remove("modal-show")
		}
	}
});

//script for form message
var buttonMessage = document.querySelector(".button-message");
var formPopup = document.querySelector(".form-message");
var closeForm = formPopup.querySelector(".form-message-close");

var form = formPopup.querySelector("form");
var youName = formPopup.querySelector("[name=name]");
var email = formPopup.querySelector("[name=email]");
var fieldText = formPopup.querySelector("[name=field-text]");

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("field-text]");
  } 
    catch (err) {
    isStorageSupport = false;
};

buttonMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
    
    if (storage) {
    	fieldText.value = storage;
    }

    youName.focus();
});

closeForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	formPopup.classList.remove("modal-show");
	formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!youName.value || !email.value || !fieldText.value) {
	   evt.preventDefault();
	   formPopup.classList.remove("modal-error");
	   formPopup.offsetWidth = formPopup.offsetWidth;
	   formPopup.classList.add("modal-error");
    } else {
    	if (isStorageSupport) {
    	localStorage.setItem("field-text", fieldText.value);
       }
    }
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (formPopup.classList.contains("modal-show")) {
			formPopup.classList.remove("modal-show")
			formPopup.classList.remove("modal-error");
		}
	}
});

// script for map
var buttonMap = document.querySelector(".button-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".map-close");

buttonMap.addEventListener("click", function (evt) {
	 evt.preventDefault();
	 popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupMap.classList.contains("modal-show")) {
			popupMap.classList.remove("modal-show")
		}
	}
});