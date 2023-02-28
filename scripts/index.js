let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__button-edit');
let closeProfile = document.querySelector('.popup__button-close');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_value_name');
let jobInput = popup.querySelector('.popup__input_value_job');
let elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const createCard = (card) => {
  let cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true);
  let cardName = cardTemplate.querySelector('.element__title');
  cardName.textContent = card.name;
  let cardLink = cardTemplate.querySelector('.element__photo');
  cardLink.setAttribute('src', card.link);
  cardLink.alt = `${card.name}`;
  let likeButton = cardTemplate.querySelector('.element__button-like');
  likeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('element__button-like_active');
  });
  let delButton = cardTemplate.querySelector('.element__button-del');
  delButton.addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });
  elements.append(cardTemplate);
}

initialCards.forEach(createCard);



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
