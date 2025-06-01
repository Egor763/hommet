const headerOpenPopupButton = document.querySelector('.header__number-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup__active');
}

function closePopup() {
  popup.classList.remove('popup__active');
}

headerOpenPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
