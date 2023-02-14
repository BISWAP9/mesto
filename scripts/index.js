let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__button-edit');
let closeProfile = document.querySelector('.popup__button-close');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_value_name');
let jobInput = popup.querySelector('.popup__input_value_job');


editProfile.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

function formHide () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  formHide();
}

closeProfile.addEventListener('click', formHide);
formElement.addEventListener('submit', handleFormSubmit);
